/* eslint-disable react/no-danger */
import * as React from "react";

import { IntlConsumer, Values } from "..";

type Props = {
  t: string;
  values?: Values;
  html?: boolean;
};

const Translate = React.forwardRef(
  ({ t, values = {}, html = false }: Props, ref: React.Ref<HTMLSpanElement>) => (
    <IntlConsumer>
      {intl =>
        html ? (
          <span ref={ref} dangerouslySetInnerHTML={{ __html: intl.t(t, values) }} />
        ) : (
          intl.t(t, values)
        )
      }
    </IntlConsumer>
  ),
);

Translate.displayName = "Translate";

export default Translate;
