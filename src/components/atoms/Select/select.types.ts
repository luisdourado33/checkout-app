import { type CSSProperties, type InputHTMLAttributes } from "react";

import { type BaseComponentProps } from "components/@types";

interface InputBaseProps {
  children?: React.ReactNode;
  label?: string;
  style?: CSSProperties;
  helperText?: string;
  error?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export type InputProps = BaseComponentProps &
  InputBaseProps &
  InputHTMLAttributes<HTMLSelectElement>;
