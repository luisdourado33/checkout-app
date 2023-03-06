import type { CSSProperties } from "react";

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
    | "space-around";
  w?: string;
  h?: string;
  px?: string;
  py?: string;
  mx?: string;
  my?: string;
  style?: CSSProperties;
}
