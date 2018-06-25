// @flow strict
/* eslint-disable react/no-danger */
import * as React from "react";

import { Consumer } from "client/services/intl/context";

// TODO add actual translation
type Props = {
  t: string,
  // values?: { [key: string]: string | number },
  html: boolean,
};

const Text = (props: Props) => (
  <Consumer>
    {intl =>
      props.html ? (
        <span dangerouslySetInnerHTML={{ __html: intl.translations[props.t] || props.t }} />
      ) : (
        intl.translations[props.t] || props.t
      )
    }
  </Consumer>
);

Text.defaultProps = {
  // values: {},
  html: false,
};

export default Text;
