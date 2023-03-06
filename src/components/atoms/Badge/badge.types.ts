import type { BaseComponentProps } from "components/@types";

interface BadgeBaseProps {
  children?: React.ReactNode;
}

export type BadgeProps = BadgeBaseProps & BaseComponentProps;
