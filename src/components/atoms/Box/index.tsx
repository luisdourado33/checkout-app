import React from "react";

import { BaseBox } from "./base-box";
import type { BoxProps } from "./box.types";

export const Box: React.FC<BoxProps> = (props) => {
  return <BaseBox {...props}>{props.children}</BaseBox>;
};
