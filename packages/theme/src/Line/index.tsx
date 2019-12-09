import styled, { StyledComponent } from "styled-components";

import textMixin, { Props as TextProps } from "../mixins/text";

import theme, { Theme, ThemeProps } from "..";

type Props = TextProps &
  ThemeProps & {
    children: React.ReactNode;
    className?: string;
  };

const Line: StyledComponent<"span", Theme, Props> = styled.span`
  ${textMixin};
`;

Line.defaultProps = {
  theme,
};

export default Line;
