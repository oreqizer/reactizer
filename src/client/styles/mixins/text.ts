import { css } from "styled-components";

import { ThemeProps, getLineHeight, getLineMargin, FONT_SIZE } from "client/styles/theme";

export type Props = {
  fontSize?: number;
  marginTop?: number;
  marginBottom?: number;
  border?: number;
};

type StyledProps = Props & ThemeProps;

const text = css`
  font-family: ${(props: StyledProps) => props.theme.fontFamily};
  display: inline-block;
  font-size: ${(props: StyledProps) => (props.fontSize || 1) * FONT_SIZE}px;
  line-height: ${(props: StyledProps) => getLineHeight(props.fontSize || 1)}px;
  margin-top: ${(props: StyledProps) => getLineMargin(props.marginTop || 0, props.border || 0)}px;
  margin-bottom: ${(props: StyledProps) =>
    getLineMargin(props.marginBottom || 0, props.border || 0)}px;
  color: ${(props: StyledProps) => props.theme.colorInkNormal};
`;

export default text;
