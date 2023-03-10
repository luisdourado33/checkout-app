/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { type ICheckoutForm } from "@types";
import { useAppDispatch, useAppSelector } from "hooks/useReduxHook";
import {
  selectAuthenticated,
  setFormFields,
  toggleIsFormFilled,
} from "store/reducers";
import styled from "styled-components";
import {
  formatCPF,
  formatCreditCardNumber,
  formatCVV,
  validityDateMask,
} from "utils/masks";
import { getInstallment } from "utils/parsers";
import { validationSchema } from "utils/validators/validationSchema";

import { Box, Button, Input, Wrapper } from "components/atoms";
export const Form = styled.form``;

export const PaymentForm: React.FC<any> = () => {
  const state = useAppSelector(selectAuthenticated);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ICheckoutForm>({
    resolver: yupResolver(validationSchema),
  });

  const handleSubmitForm = async (data: ICheckoutForm): Promise<void> => {
    console.log(data);
    dispatch(setFormFields(data));
    dispatch(toggleIsFormFilled());
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
          onChange={(e: any) => {
            setValue(
              "creditCardNumber",
              formatCreditCardNumber(e.target.value)
            );
          }}
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
            onChange={(e: any) => {
              setValue("validityDate", validityDateMask(e.target.value));
            }}
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
            onChange={(e: any) => {
              setValue("cvv", formatCVV(e.target.value));
            }}
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
          onChange={(e: any) => {
            setValue("cpf", formatCPF(e.target.value));
          }}
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
          onChange={(e: any) => {
            setValue("installments", getInstallment(Number(e.target.value)));
          }}
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
