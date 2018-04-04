/* @flow */
import * as React from "react";
import PropTypes from "prop-types";
import Polyglot from "node-polyglot";

import type { Values } from "../../public/services/intl/withIntl";
import main from "../../styles/main";

type Props = {
  locale: string,
  translations: { [key: string]: string },
  brand: typeof main,
  children: React.Node,
};

export default class StaticsProvider extends React.Component<Props> {
  static childContextTypes = {
    locale: PropTypes.string.isRequired,
    translate: PropTypes.func.isRequired,
    brand: PropTypes.object.isRequired,
  };

  getChildContext() {
    const { locale, translations, brand } = this.props;

    const polyglot = new Polyglot({ locale, phrases: translations });
    return {
      locale,
      translate: (key: string, values: Values) =>
        polyglot.t(key, Object.assign({}, { _: key }, values)),
      brand,
    };
  }

  render() {
    return this.props.children;
  }
}
