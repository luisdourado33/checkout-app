import React from "react";
import styled from "styled-components";

import { Box, Input, Wrapper } from "components/atoms";

export const Form = styled.form``;

export const PaymentForm: React.FC<any> = () => {
  return (
    <Box>
      <Form>
        <Input
          id="card-number"
          w="100%"
          label="Número do cartão"
          placeholder="0000 0000 0000 0000"
          type="text"
          style={{ marginBottom: "30px" }}
        />
        <Wrapper d="flex" justifyContent="space-between">
          <Input
            id="expiration-date"
            label="Data de Validade"
            placeholder="MM/AA"
            type="text"
            style={{
              marginRight: "30px",
            }}
          />

          <Input
            id="cvv"
            label="CVV"
            placeholder="000"
            type="number"
            w="fit-content"
          />
        </Wrapper>
      </Form>
    </Box>
  );
};
