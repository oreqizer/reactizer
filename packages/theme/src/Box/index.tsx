import styled, { StyledComponent } from "styled-components";

import boxMixin, { Props as BoxProps } from "../mixins/box";

import { Theme } from "..";

type Props = BoxProps & {
  children: React.ReactNode;
  className?: string;
};

const Box: StyledComponent<"div", Theme, Props> = styled.div`
  ${boxMixin};
`;

export default Box;
