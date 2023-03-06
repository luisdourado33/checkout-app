import type { BaseComponentProps } from "components/@types";

interface WrapperBaseProps {
  children?: React.ReactNode;
}

export type WrapperProps = BaseComponentProps & WrapperBaseProps;
