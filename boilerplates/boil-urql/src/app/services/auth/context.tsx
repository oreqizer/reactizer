import * as React from "react";
import * as Sentry from "@sentry/browser";

import firebase, { Firebase } from "app/services/firebase";
import * as token from "app/services/auth/token";

enum State {
  INITIALIZING = "initializing",
  ANONYMOUS = "anonymous",
  USER = "user",
}

export type Context = {
  state: State;
  firebase: Firebase;
};

const context = React.createContext<Context>({
  state: State.INITIALIZING,
  firebase: firebase(),
});

const { Provider, Consumer: AuthConsumer } = context;

type Props = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const fb = React.useMemo(firebase, []);

  const [state, setState] = React.useState<State>(State.INITIALIZING);

  React.useEffect(() => {
    fb.auth().onIdTokenChanged(async user => {
      try {
        if (user) {
          token.save(await user.getIdToken());

          setState(user.isAnonymous ? State.ANONYMOUS : State.USER);
        } else {
          token.remove();

          setState(State.INITIALIZING);

          await fb.createAnon();
        }
      } catch (e) {
        Sentry.captureException(e);
      }
    });
  }, [fb]);

  return (
    <Provider
      value={{
        state,
        firebase: fb,
      }}
    >
      {children}
    </Provider>
  );
};

const useAuth = () => React.useContext(context);

export { AuthProvider, AuthConsumer, useAuth };
