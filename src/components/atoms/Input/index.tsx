/* eslint-disable react/display-name */
import React from "react";

import { Wrapper } from "../Wrapper";

import { HelperText, InputComponent, Label } from "./styles";

export const Input = React.forwardRef((props: any, ref: any) => {
  return (
    <Wrapper d="flex" flexDirection="column" style={props.style ?? {}}>
      <Label htmlFor={props.id}>{props.label}</Label>
      <InputComponent
        {...props.register}
        placeholder={props.placeholder}
        type={props.type}
      />
      <HelperText error={props.error?.message} fontSize="13px" mt="2px">
        {props.error?.message}
      </HelperText>
    </Wrapper>
  );
});
