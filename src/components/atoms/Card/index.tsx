import React from "react";
import type { CardProps } from "./card.types";

import { BaseCard } from "./base-card";

export const Card: React.FC<CardProps> = (props) => {
  return <BaseCard {...props}>{props.children}</BaseCard>;
};
