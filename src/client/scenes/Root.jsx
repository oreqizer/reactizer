// @flow strict
import * as React from "react";
import styled, { createGlobalStyle, ThemeConsumer } from "styled-components";
import { hot } from "react-hot-loader";

import Text from "../components/Text";
import { Consumer as IntlConsumer } from "../services/intl/context";
import { themeDefault } from "../records/Theme";
import type { ThemeProps } from "../records/Theme";

const Global = createGlobalStyle`
  body {
    color: #212121;
    font-family: "Helvetica Neue", "Calibri Light", Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: 0.02em;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
`;

const H1 = styled.h1`
  margin-top: 0;
`;

const Div = styled.div`
  background: ${({ theme }: ThemeProps) => theme.colors.primary};
  padding: 20px;
`;

const A = styled.a`
  display: inline-block;
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  margin: 5px;
  border: 1px solid black;
  border-radius: 3px;
  color: black;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

Div.defaultProps = {
  theme: themeDefault,
};

const Root = () => (
  <ThemeConsumer>
    {theme => (
      <IntlConsumer>
        {intl => (
          <Div>
            <Global />
            <H1>{`${theme.name} "${intl.locale}"`}</H1>
            <Text t={__("Do you even lift?")} />
            <A href={theme.name === "Reactizer" ? "/?theme=alt" : "/"}>
              <Text t={__("Switch theme")} />
            </A>
            <A href={intl.locale === "en" ? "/?locale=de" : "/"}>
              <Text t={__("Switch locale")} />
            </A>
          </Div>
        )}
      </IntlConsumer>
    )}
  </ThemeConsumer>
);

// eslint-disable-next-line no-undef
export default hot(module)(Root);
