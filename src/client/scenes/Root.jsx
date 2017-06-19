/* @flow */
import React from 'react';
import styled from 'styled-components';

import { colors } from '../styles/variables';


const Div = styled.div.attrs({ color: colors.primary })`
  background: ${props => props.color};
`;

const Root = () => (
  <Div>
    Reactizer!
  </Div>
);

export default Root;
