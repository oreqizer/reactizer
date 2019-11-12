/* eslint-disable react/no-danger */
import * as React from "react";

import { Consumer } from "app/services/intl/context";
import { Values } from "app/records/Intl";

type Props = {
  t?: string;
  values?: Values;
  html?: boolean;
};

const Translate = React.forwardRef(
  ({ t = "", values = {}, html = false }: Props, ref: React.Ref<HTMLSpanElement>) => (
    <Consumer>
      {intl =>
        html ? (
          <span ref={ref} dangerouslySetInnerHTML={{ __html: intl.t(t, values) }} />
        ) : (
          intl.t(t, values)
        )
      }
    </Consumer>
  ),
);

Translate.displayName = "Translate";

export default Translate;
