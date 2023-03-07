import type { CSSProperties, InputHTMLAttributes } from "react";

import type { BaseComponentProps } from "components/@types";

interface InputBaseProps {
  children?: React.ReactNode;
  label?: string;
  style?: CSSProperties;
}

export type InputProps = BaseComponentProps &
  InputBaseProps &
  InputHTMLAttributes<HTMLInputElement>;
