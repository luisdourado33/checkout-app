export interface BaseComponentProps {
  d?: "flex" | "block" | "static";
  align?: "stretch" | "flex-start" | "center" | "flex-end";
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
  px?: string;
  py?: string;
  mx?: string;
  my?: string;
}
