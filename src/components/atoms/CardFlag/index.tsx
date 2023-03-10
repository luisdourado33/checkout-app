import React from "react";
import styled from "styled-components";
import { type CardFlagProps } from "utils/card-flags";

const Image = styled.img`
  transition: ${({ theme }) => theme.transition.default}

  &:hover {
    transform: scale(1.1);
  }
`;

export const CardFlag: React.FC<CardFlagProps> = (props) => {
  return (
    <Image
      src={props.flag}
      alt={props.name}
      width={props.width ?? "32.49px"}
      height={props.height ?? "23.12px"}
    />
  );
};
