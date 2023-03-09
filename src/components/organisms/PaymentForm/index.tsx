/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { type ICheckoutForm } from "@types";
import { useAppSelector } from "hooks/useReduxHook";
import { selectAuthenticated } from "store/reducers";
import styled from "styled-components";
import { isValidCPF, isValidCreditCard } from "utils/validators";
import * as yup from "yup";

import { Box, Button, Input, Wrapper } from "components/atoms";
export const Form = styled.form``;

export const PaymentForm: React.FC<any> = () => {
  yup.addMethod(yup.string, "isValidCPF", function (errorMessage: string) {
    return this.test(`test-cpf-format`, errorMessage, function (value: any) {
      const { path, createError } = this;

      return isValidCPF(value) || createError({ path, message: errorMessage });
    });
  });

  yup.addMethod(
    yup.string,
    "isValidCreditCard",
    function (errorMessage: string) {
      return this.test(
        `test-credit-card-format`,
        errorMessage,
        function (value: any) {
          const { path, createError } = this;

          return (
            isValidCreditCard(value) ||
            createError({ path, message: errorMessage })
          );
        }
      );
    }
  );

  const validationSchema = yup.object().shape<any>({
    creditCardNumber: yup
      .string()
      .test(
        `test-credit-card-format`,
        "Formato de cartão inválido",
        (value: any) => {
          return isValidCreditCard(value);
        }
      ),
    // .required("Campo obrigatórios"),
    // cvv:
    // validityDate:
    // printedName:
    // cpf:
    // installments:
  });

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<ICheckoutForm>({ resolver: yupResolver(validationSchema) });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const state = useAppSelector(selectAuthenticated);

  return (
    <Box w="100%">
      <Form onSubmit={onSubmit}>
        <Input
          {...register("creditCardNumber")}
          w="100%"
          label="Número do cartão"
          placeholder="0000 0000 0000 0000"
          type="text"
          style={{ marginBottom: "30px" }}
        />
        <span>{errors?.creditCardNumber?.message}</span>
        <Wrapper d="flex" w="100%" mb="30px">
          <Input
            {...register("validityDate")}
            label="Data de Validade"
            placeholder="MM/AA"
            type="text"
            style={{
              marginRight: "30px",
              width: "100%",
            }}
          />

          <Input
            {...register("cvv")}
            label="CVV"
            placeholder="000"
            type="number"
            style={{
              width: "100%",
            }}
          />
        </Wrapper>
        <Input
          {...register("printedName")}
          w="100%"
          label="Nome impresso no cartão"
          placeholder="Seu nome"
          type="text"
          style={{ marginBottom: "30px" }}
        />
        <Input
          {...register("cpf")}
          w="100%"
          label="CPF"
          placeholder="000.000.000-00"
          type="text"
          style={{ marginBottom: "30px" }}
        />
        <Input
          {...register("coupomCode")}
          w="100%"
          label="Cupom"
          placeholder="Insira aqui"
          type="text"
          style={{ marginBottom: "30px" }}
        />
        <Input
          {...register("installments")}
          w="100%"
          label="Número de parcelas"
          placeholder="Selecionar"
          type="number"
          style={{ marginBottom: "30px" }}
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
