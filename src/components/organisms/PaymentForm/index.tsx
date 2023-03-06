import React from "react";
import styled from "styled-components";

import { Box, Input, Wrapper, Button } from "components/atoms";

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
        <Wrapper
          d="flex"
          justifyContent="space-between"
          style={{ marginBottom: "30px" }}
        >
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
        <Input
          id="name-in-card"
          w="100%"
          label="Nome impresso no cartão"
          placeholder="Seu nome"
          type="text"
          style={{ marginBottom: "30px" }}
        />
        <Input
          id="document"
          w="100%"
          label="CPF"
          placeholder="000.000.000-00"
          type="text"
          style={{ marginBottom: "30px" }}
        />
        <Input
          id="coupom"
          w="100%"
          label="Cupom"
          placeholder="Insira aqui"
          type="text"
          style={{ marginBottom: "30px" }}
        />
        <Input
          id="installments"
          w="100%"
          label="Número de parcelas"
          placeholder="Selecionar"
          type="number"
          style={{ marginBottom: "30px" }}
        />
        <Button variant="solid" style={{ width: "100%" }}>
          Finalizar pagamento
        </Button>
      </Form>
    </Box>
  );
};
