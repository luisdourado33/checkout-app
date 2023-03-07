export interface BaseButtonProps {
  variant: "solid" | "outline" | "text";
}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  BaseButtonProps;
