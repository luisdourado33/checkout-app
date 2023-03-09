import React from "react";

import { BaseHeader } from "./base-header";
import { type HeaderProps } from "./header.types";

export const Header: React.FC<HeaderProps> = (props) => {
  return <BaseHeader {...props}>{props.children}</BaseHeader>;
};
