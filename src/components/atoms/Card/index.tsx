import React from "react";

import { BaseCard } from "./base-card";
import { type CardProps } from "./card.types";

export const Card: React.FC<CardProps> = (props) => {
  return <BaseCard {...props}>{props.children}</BaseCard>;
};
