/* @flow */
import * as React from "react";
import * as R from "ramda";
import PropTypes from "prop-types";

export type Values = { [string]: string | number };
export type Translate = (text: string, values?: Values) => string;

type SuppliedProps = {
  locale: string,
  translate: Translate,
};

function withIntl<T>(Component: React.ComponentType<T>) {
  const WithIntl = (props: T, context: SuppliedProps) =>
    React.createElement(Component, {
      ...props,
      locale: context.locale || "en",
      translate: context.translate || R.identity,
    });

  WithIntl.displayName = `WithIntl(${Component.displayName || Component.name || "Component"})`;

  WithIntl.contextTypes = {
    locale: PropTypes.string,
    translate: PropTypes.func,
  };

  WithIntl.WrappedComponent = Component;

  return WithIntl;
}

export default withIntl;
