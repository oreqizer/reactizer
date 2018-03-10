/* @flow */
import * as React from "react";
import PropTypes from "prop-types";
import Polyglot from "node-polyglot";

import type { Values } from "./withIntl";

type OwnProps = {
  children: React.Node,
};

type Props = OwnProps & {
  locale: string,
  translations: { [key: string]: string },
};

export default class IntlProvider extends React.Component<Props> {
  static childContextTypes = {
    locale: PropTypes.string.isRequired,
    translate: PropTypes.func.isRequired,
  };

  getChildContext() {
    const { locale, translations } = this.props;

    const polyglot = new Polyglot({ locale, phrases: translations });
    return {
      locale,
      translate: (key: string, values: Values) =>
        polyglot.t(key, Object.assign({}, { _: key }, values)),
    };
  }

  render() {
    return this.props.children;
  }
}
