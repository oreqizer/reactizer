/* @flow */
/* eslint-disable react/no-danger */
import * as React from "react";

import withIntl from "../services/intl/withIntl";
import type { Translate, Values } from "../services/intl/withIntl";

type Props = {
  t: string,
  translate: Translate,
  values?: Values,
  html?: boolean,
};

const Text = (props: Props) =>
  props.html ? (
    <span dangerouslySetInnerHTML={{ __html: props.translate(props.t, props.values) }} />
  ) : (
    props.translate(props.t, props.values)
  );

Text.defaultProps = {
  values: {},
  html: false,
};

export default withIntl(Text);
