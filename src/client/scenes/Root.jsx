/* @flow */
import React from "react";
import styled, { injectGlobal } from "styled-components";

import { colors } from "../styles/variables";

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  body {
    color: #212121;
    font-family: "Helvetica Neue", "Calibri Light", Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: 0.02em;
  }
`;

const Div = styled.div`
  background: ${props => props.theme.colorPrimary};
`;

Div.defaultProps = {
  theme: {
    colorPrimary: colors.primary,
  },
};

const Root = () => <Div>Reactizer!</Div>;

export default Root;
