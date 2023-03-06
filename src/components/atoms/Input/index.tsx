import React from "react";

import { Wrapper } from "../Wrapper";

import type { InputProps } from "./input.types";
import { InputComponent, Label } from "./styles";

export const Input = (props: InputProps): JSX.Element => {
  return (
    <Wrapper d="flex" w="100%" flexDirection="column">
      <Label htmlFor={props.id}>{props.label}</Label>
      <InputComponent id={props.id} placeholder="0000 0000 0000 0000" />
    </Wrapper>
  );
};
