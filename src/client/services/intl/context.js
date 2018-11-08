// @flow strict
import * as React from "react";

import { intlDefault } from "client/records/Intl";
import type { Intl } from "client/records/Intl";

const context: React.Context<Intl> = React.createContext(intlDefault);

export const { Consumer, Provider } = context;
