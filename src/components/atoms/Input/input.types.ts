import { type CSSProperties, type InputHTMLAttributes } from "react";

import { type BaseComponentProps } from "components/@types";

interface InputBaseProps {
  children?: React.ReactNode;
  label?: string;
  style?: CSSProperties;
  helperText?: string;
  error?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type InputProps = BaseComponentProps &
  InputBaseProps &
  InputHTMLAttributes<HTMLInputElement>;
