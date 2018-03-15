/* @flow */
import * as React from "react";
import PropTypes from "prop-types";

import main from "../../styles/main";

type SuppliedProps = {
  brand: typeof main,
};

function withBrand<T>(Component: React.ComponentType<T>) {
  const WithBrand = (props: T, context: SuppliedProps) =>
    React.createElement(Component, {
      ...props,
      brand: context.brand || main,
    });

  WithBrand.displayName = `WithBrand(${Component.displayName || Component.name || "Component"})`;

  WithBrand.contextTypes = {
    brand: PropTypes.object,
  };

  WithBrand.WrappedComponent = Component;

  return WithBrand;
}

export default withBrand;
