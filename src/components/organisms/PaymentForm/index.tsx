/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { type ICheckoutForm } from "@types";
import { useAppSelector } from "hooks/useReduxHook";
import { selectAuthenticated, setFormFields } from "store/reducers";
import styled from "styled-components";
import { validationSchema } from "utils/validators/validationSchema";

import { Box, Button, Input, Wrapper } from "components/atoms";
export const Form = styled.form``;

export const PaymentForm: React.FC<any> = () => {
  const state = useAppSelector(selectAuthenticated);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICheckoutForm>({
    resolver: yupResolver(validationSchema),
  });

  const [formValues, setFormValues] = useState<ICheckoutForm & any>({
    creditCardNumber: "",
    cvv: "",
    printedName: "",
    cpf: "",
    installments: 0,
    validityDate: "",
    coupomCode: "",
  });

  const handleSubmitForm = async (data: ICheckoutForm): Promise<void> => {
    console.log(JSON.stringify(data));
  };

  return (
    <Box w="100%">
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <Input
          w="100%"
          label="Número do cartão"
          placeholder="0000 0000 0000 0000"
          type="text"
          style={{ marginBottom: "30px" }}
          register={register("creditCardNumber")}
          error={errors.creditCardNumber}
        />
        <Wrapper d="flex" w="100%" mb="30px">
          <Input
            label="Data de Validade"
            placeholder="MM/AA"
            type="text"
            style={{
              marginRight: "30px",
              width: "100%",
            }}
            register={register("validityDate")}
            error={errors.validityDate}
          />

          <Input
            label="CVV"
            placeholder="000"
            type="number"
            style={{
              width: "100%",
            }}
            register={register("cvv")}
            error={errors.cvv}
          />
        </Wrapper>
        <Input
          w="100%"
          label="Nome impresso no cartão"
          placeholder="Seu nome"
          type="text"
          style={{ marginBottom: "30px" }}
          register={register("printedName")}
          error={errors.printedName}
        />
        <Input
          w="100%"
          label="CPF"
          placeholder="000.000.000-00"
          type="text"
          style={{ marginBottom: "30px" }}
          register={register("cpf")}
          error={errors.cpf}
        />
        <Input
          w="100%"
          label="Cupom"
          placeholder="Insira aqui"
          type="text"
          style={{ marginBottom: "30px" }}
          register={register("coupomCode")}
          error={errors.coupomCode}
        />
        <Input
          w="100%"
          label="Número de parcelas"
          placeholder="Selecionar"
          type="number"
          style={{ marginBottom: "30px" }}
          register={register("installments")}
          error={errors.installments}
        />
        <Button
          w="100%"
          variant="solid"
          disabled={state.isLoading}
          type="submit"
        >
          Finalizar pagamento
        </Button>
      </Form>
    </Box>
  );
};
