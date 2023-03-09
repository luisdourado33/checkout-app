/* eslint-disable react/display-name */
import React from "react";

import { Wrapper } from "../Wrapper";

import { InputComponent, Label } from "./styles";

export const Input = React.forwardRef((props: any, ref) => {
  console.log(props);
  return (
    <Wrapper d="flex" flexDirection="column" style={props.style ?? {}}>
      <Label htmlFor={props.id}>{props.label}</Label>
      <InputComponent
        innerRef={ref}
        {...props}
        placeholder={props.placeholder}
        type={props.type}
      />
    </Wrapper>
  );
});
