// @flow strict
/* eslint-disable react/no-danger */
import * as React from "react";

import { Consumer } from "client/services/intl/context";

type Props = {
  t: string,
  values: { [key: string]: string },
  html: boolean,
};

const Text = ({ t, values, html }: Props) => (
  <Consumer>
    {intl =>
      html ? <span dangerouslySetInnerHTML={{ __html: intl.t(t, values) }} /> : intl.t(t, values)
    }
  </Consumer>
);

Text.defaultProps = {
  values: {},
  html: false,
};

export default Text;
