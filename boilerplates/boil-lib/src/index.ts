import * as React from "react";

type Context = {
  name: string;
  value: string;
};

const context = React.createContext<Context | null>(null);

const { Provider: CtxProvider, Consumer: CtxConsumer } = context;

const useCtx = () => {
  return React.useContext(context);
};

export { CtxProvider, CtxConsumer, useCtx };
