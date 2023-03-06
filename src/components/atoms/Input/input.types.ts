import type { InputHTMLAttributes } from "react";
import type { BaseComponentProps } from "components/@types";

interface InputBaseProps {
  children?: React.ReactNode;
  label?: string;
}

export type InputProps = BaseComponentProps &
  InputBaseProps &
  InputHTMLAttributes<HTMLInputElement>;
