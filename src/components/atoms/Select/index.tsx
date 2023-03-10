/* eslint-disable react/display-name */
import React from "react";

import { Wrapper } from "../Wrapper";

import { HelperText, Label, SelectComponent } from "./styles";

export const Select = React.forwardRef((props: any, ref: any) => {
  const renderOptions = isNaN(props?.options) ? (
    <option value="">Selecione um plano</option>
  ) : (
    Array.from({ length: props?.options }, (_, i) => i + 1).map(
      (option, key) => (
        <option value={option} key={key}>
          {option}
        </option>
      )
    )
  );
  return (
    <Wrapper d="flex" flexDirection="column" style={props.style ?? {}}>
      <Label htmlFor={props.id}>{props.label}</Label>
      <SelectComponent
        {...props.register}
        onChange={props.onChange}
        placeholder={props.placeholder}
        type={props.type}
        style={{
          backgroundColor: "transparent",
        }}
      >
        {renderOptions}
      </SelectComponent>
      <HelperText error={props.error?.message} fontSize="13px" mt="2px">
        {props.error?.message}
      </HelperText>
    </Wrapper>
  );
});
