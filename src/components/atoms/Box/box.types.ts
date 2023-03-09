import type { BaseComponentProps } from "components/@types";

interface BoxBaseProps {
  children?: React.ReactNode;
}

export type BoxProps = BaseComponentProps & BoxBaseProps;
