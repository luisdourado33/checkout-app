import type { BaseComponentProps } from "components/@types";

export interface BaseButtonProps {
  variant: "solid" | "outline" | "text";
}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  BaseButtonProps &
  BaseComponentProps;
