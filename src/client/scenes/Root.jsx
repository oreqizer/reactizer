/* @flow */
import React from 'react';
import styled from 'styled-components';

import { colors } from '../styles/variables';


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
    Reactizer!
  </Div>
);

export default Root;
