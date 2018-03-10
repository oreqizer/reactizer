/* @flow */
import React from "react";
import styled from "styled-components";

import { colors } from "../styles/variables";
import Text from "../components/Text";

const Div = styled.div`
  background: ${props => props.theme.colorPrimary};
`;

Div.defaultProps = {
  theme: {
    colorPrimary: colors.primary,
  },
};

const Root = () => (
  <Div>
    <Text t={__("Do you even lift?")} />
  </Div>
);

export default Root;
