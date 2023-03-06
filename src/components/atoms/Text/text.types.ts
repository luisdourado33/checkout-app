import type { BaseComponentProps, BaseTextProps } from "components/@types";

interface TextBaseProps {
  children?: React.ReactNode;
}

export type TextProps = BaseTextProps & TextBaseProps & BaseComponentProps;
