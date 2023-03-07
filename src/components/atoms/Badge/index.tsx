import React from "react";

import { BaseBadge } from "./base-badge";
import type { BadgeProps } from "./badge.types";

export const Badge: React.FC<BadgeProps> = (props) => {
  return <BaseBadge {...props}>{props.children}</BaseBadge>;
};
