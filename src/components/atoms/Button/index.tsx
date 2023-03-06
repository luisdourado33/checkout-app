import React from "react";

import { BaseButton } from "./base-button";
import type { ButtonProps } from "./button.types";

export const Button: React.FC<ButtonProps> = (props) => {
  return <BaseButton {...props}>{props.children}</BaseButton>;
};
