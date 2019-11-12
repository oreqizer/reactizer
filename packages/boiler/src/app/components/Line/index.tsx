import styled, { StyledComponent } from "styled-components";

import theme, { Theme, ThemeProps } from "app/styles/theme";
import textMixin, { Props as TextProps } from "app/styles/mixins/text";

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
