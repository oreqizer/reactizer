// @flow strict
import * as React from "react";

import { themeDefault } from "client/records/Theme";

export const { Consumer, Provider } = React.createContext(themeDefault);
