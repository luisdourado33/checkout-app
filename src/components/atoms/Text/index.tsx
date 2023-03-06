import React from "react";

import { BaseText } from "./base-text";
import type { TextProps } from "./text.types";

export const Text: React.FC<TextProps> = (props) => {
  return <BaseText {...props}>{props.children}</BaseText>;
};
