import * as app from "firebase/app";
// 2nd on purpose
import "firebase/auth";
import * as Sentry from "@sentry/browser";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  appId: process.env.FIREBASE_APP_ID,
};

type EmailInput = {
  email: string;
  password: string;
};

export type Firebase = {
  auth(): app.auth.Auth;

  createAnon(): Promise<app.User | null>;

  anonToEmail(input: EmailInput): Promise<app.User | null>;

  signInEmail(input: EmailInput): Promise<app.User | null>;
  signInGoogle(): Promise<void>;
  signOut(): Promise<void>;

  getIdToken(refresh?: boolean): Promise<string>;

  passwordReset(email: string): Promise<void>;
  passwordUpdate(password: string): Promise<void>;
};

const firebase = (): Firebase => {
  if (app.apps.length === 0) {
    app.initializeApp(config);
    app.auth().setPersistence(app.auth.Auth.Persistence.LOCAL);
  }

  return {
    auth: app.auth,
    createAnon: async () => {
      try {
        await app.auth().signInAnonymously();
        return app.auth().currentUser;
      } catch (e) {
        Sentry.captureException(e);
        return Promise.reject(e);
      }
    },
    anonToEmail: async ({ email, password }) => {
      const user = app.auth().currentUser;

      if (!user) {
        return Promise.reject(new Error("NO_CURRENT_USER"));
      }

      const creds = app.auth.EmailAuthProvider.credential(email, password);

      try {
        await user.linkAndRetrieveDataWithCredential(creds);
        return app.auth().currentUser;
      } catch (e) {
        return Promise.reject(e);
      }
    },
    signInEmail: async ({ email, password }) => {
      try {
        await app.auth().signInWithEmailAndPassword(email, password);
        return app.auth().currentUser;
      } catch (e) {
        Sentry.captureException(e);
        return Promise.reject(e);
      }
    },
    signInGoogle: () => {
      const provider = new app.auth.GoogleAuthProvider();
      provider.addScope("profile");
      provider.addScope("email");

      return app.auth().signInWithRedirect(provider);
    },
    signOut: async () => {
      try {
        await app.auth().signOut();
      } catch (e) {
        Sentry.captureException(e);
      }
    },
    getIdToken: (refresh = false) => {
      const user = app.auth().currentUser;

      if (!user) {
        return Promise.reject(new Error("NO_CURRENT_USER"));
      }

      try {
        return user.getIdToken(refresh);
      } catch (e) {
        Sentry.captureException(e);
        return Promise.reject(e);
      }
    },
    passwordReset: email => app.auth().sendPasswordResetEmail(email),
    passwordUpdate: password => {
      const user = app.auth().currentUser;
      if (!user) {
        return Promise.resolve();
      }
      return user.updatePassword(password);
    },
  };
};

export default firebase;
