import React from "react";

import { BaseContainer } from "./base-container";
import { type ContainerProps } from "./container.types";

export const Container: React.FC<ContainerProps> = (props) => {
  return <BaseContainer {...props}>{props.children}</BaseContainer>;
};
