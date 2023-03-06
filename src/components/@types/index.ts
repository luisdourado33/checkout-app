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
  px?: string;
  py?: string;
  mx?: string;
  my?: string;
  style?: CSSProperties;
}

export interface BaseTextProps {
  fontWeight?: typeof IFontWeight | string;
  fontSize?: typeof IFontSize | string;
  color?: string;
  textAlign?: string;
}
