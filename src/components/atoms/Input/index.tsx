import React from "react";

import { Wrapper } from "../Wrapper";

import { type InputProps } from "./input.types";
import { InputComponent, Label } from "./styles";

export const Input = (props: InputProps): JSX.Element => {
  return (
    <Wrapper d="flex" flexDirection="column" style={props.style ?? {}}>
      <Label htmlFor={props.id}>{props.label}</Label>
      <InputComponent
        id={props.id}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
      />
    </Wrapper>
  );
};
