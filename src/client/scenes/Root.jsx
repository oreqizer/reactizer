/* @flow */
import React from "react";
import styled from "styled-components";

import theme from "../styles/theme";
import Text from "../components/Text";

const Div = styled.div`
  background: ${props => props.theme.primary};
`;

Div.defaultProps = {
  theme,
};

const Root = () => (
  <Div>
    <Text t={__("Do you even lift?")} />
  </Div>
);

export default Root;
