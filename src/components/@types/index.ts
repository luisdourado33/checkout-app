import type { CSSProperties } from "react";
import type { IFontSize, IFontWeight } from "providers/theme";

export interface BaseComponentProps {
  id?: string;
  d?: "flex" | "block" | "static";
  align?: "stretch" | "flex-start" | "center" | "flex-end";
  flexDirection?: "row" | "column";
  justifyItems?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  w?: string;
  h?: string;

  p?: string;

  px?: string;
  py?: string;

  pt?: string;
  pb?: string;

  mx?: string;
  my?: string;
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;

  gap?: string;

  bgColor?: string;
  color?: string;

  border?: string;
  borderRadius?: string;

  position?: string;

  style?: CSSProperties;

  flex?: string;
  cursor?: string;
}

export interface BaseTextProps {
  fontWeight?: typeof IFontWeight | string;
  fontSize?: typeof IFontSize | string;
  color?: string;
  textAlign?: string;
}
