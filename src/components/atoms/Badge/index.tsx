import React from "react";

import { type BadgeProps } from "./badge.types";
import { BaseBadge } from "./base-badge";

export const Badge: React.FC<BadgeProps> = (props) => {
  return <BaseBadge {...props}>{props.children}</BaseBadge>;
};
