import React from "react";

import { BaseWrapper } from "./base-wrapper";
import type { WrapperProps } from "./wrapper.types";

export const Wrapper: React.FC<WrapperProps> = (props) => {
  return <BaseWrapper {...props}>{props.children}</BaseWrapper>;
};
