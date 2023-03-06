import React from "react";
import styled from "styled-components";

import { Box, Input } from "components/atoms";

export const Form = styled.form``;
export const PaymentForm: React.FC<any> = () => {
  return (
    <Box>
      <Input id="card-number" w="100%" label="Número do cartão" />
    </Box>
  );
};
