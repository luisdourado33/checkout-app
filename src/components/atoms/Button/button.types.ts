// interface ButtonBaseProps {
// }

export interface BaseButtonProps {
  variant: "solid" | "outline";
}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  BaseButtonProps;
