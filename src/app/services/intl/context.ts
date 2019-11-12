import * as React from "react";

import { intlDefault, Intl } from "app/records/Intl";

const context: React.Context<Intl> = React.createContext(intlDefault);

export const { Consumer, Provider } = context;

export const useIntl = () => React.useContext(context);
