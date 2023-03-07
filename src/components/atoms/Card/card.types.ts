import type { BaseComponentProps } from "components/@types";

export interface BaseCardProps {
  children?: React.ReactNode;
}

export type CardProps = BaseCardProps & BaseComponentProps;
