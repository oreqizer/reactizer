// @flow strict
import styled, { StyledComponent } from "styled-components";

import { Theme, getBoxMargin } from "app/styles/theme";

type X =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "initial"
  | "inherit"
  | "";

type Y = "stretch" | "center" | "flex-start" | "flex-end" | "baseline" | "initial" | "inherit" | "";

export type Props = {
  className?: string;
  x?: X;
  y?: Y;
  direction?: "row" | "row-reverse" | "column" | "column-reverse" | "initial" | "inherit" | "";
  marginTop?: number;
  marginBottom?: number;
  space?: number;
};

const Flex: StyledComponent<"div", Theme, Props> = styled.div`
  display: flex;
  box-sizing: border-box;
  margin-top: ${(props: Props) => getBoxMargin(0, props.marginTop || 0)}px;
  margin-bottom: ${(props: Props) => getBoxMargin(0, props.marginBottom || 0)}px;
  ${(props: Props) =>
    props.x && `justify-content: ${props.direction === "column" ? props.y : props.x}`};
  ${(props: Props) =>
    props.y && `align-items: ${props.direction === "column" ? props.x : props.y}`};
  ${(props: Props) => props.direction && `flex-direction: ${props.direction}`};

  & > *:not(:last-child) {
    ${(props: Props) => props.space && `margin-right: ${props.space}px`};
  }
`;

export default Flex;
