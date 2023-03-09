import { type BaseComponentProps } from "components/@types";

interface ContainerBaseProps {
  children?: React.ReactNode;
  fluid?: boolean;
}

export type ContainerProps = BaseComponentProps & ContainerBaseProps;
