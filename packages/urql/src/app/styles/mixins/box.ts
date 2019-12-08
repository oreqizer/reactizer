import { css } from "styled-components";

import * as fns from "app/styles/theme";

export type Props = {
  height?: number;
  marginTop?: number;
  marginBottom?: number;
};

const box = css`
  box-sizing: border-box;
  height: ${(props: Props) => fns.getBoxHeight(props.height || 1)}px;
  margin-top: ${(props: Props) => fns.getBoxMargin(props.height || 1, props.marginTop || 0)}px;
  margin-bottom: ${(props: Props) =>
    fns.getBoxMargin(props.height || 1, props.marginBottom || 0)}px;
`;

export default box;
