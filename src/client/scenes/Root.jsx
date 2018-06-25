// @flow strict
import * as React from "react";
import styled from "styled-components";

import Text from "../components/Text";
import { Consumer as ThemeConsumer } from "../services/theme/context";
import { Consumer as IntlConsumer } from "../services/intl/context";
import { themeDefault } from "../records/Theme";
import type { ThemeProps } from "../records/Theme";

const H1 = styled.h1`
  margin-top: 0;
`;

const Div = styled.div`
  background: ${(props: ThemeProps) => props.theme.colors.primary};
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
            <H1>{`${theme.name} "${intl.locale}"`}</H1>
            <Text t={__("Do you even lift?")} />
          </Div>
        )}
      </IntlConsumer>
    )}
  </ThemeConsumer>
);

export default Root;
