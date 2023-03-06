import type { BaseComponentProps } from "components/@types";

interface HeaderBaseProps {
  children?: React.ReactNode;
}

export type HeaderProps = BaseComponentProps & HeaderBaseProps;
