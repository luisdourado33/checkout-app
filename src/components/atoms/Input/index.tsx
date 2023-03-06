import React from "react";

import { Wrapper } from "../Wrapper";

import type { InputProps } from "./input.types";
import { InputComponent, Label } from "./styles";

export const Input = (props: InputProps): JSX.Element => {
  return (
    <Wrapper d="flex" w="fit-content" flexDirection="column">
      <Label>{props.label}</Label>
      <InputComponent placeholder="0000 0000 0000 0000" />
    </Wrapper>
  );
};
