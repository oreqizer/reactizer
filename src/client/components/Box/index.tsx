import styled, { StyledComponent } from "styled-components";

import { Theme } from "client/styles/theme";
import boxMixin, { Props as BoxProps } from "client/styles/mixins/box";

type Props = BoxProps & {
  children: React.ReactNode;
  className?: string;
};

const Box: StyledComponent<"div", Theme, Props> = styled.div`
  ${boxMixin};
`;

export default Box;
