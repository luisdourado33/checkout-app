import * as yup from "yup";

import { isValidCreditCard } from "../verifyCreditCard";

export const register = yup.object().shape({
  creditCardNumber: yup
    .string()
    .test(
      `is-invalid-credit-card`,
      "Formato de cartão inválido",
      (value: any) => {
        return !isValidCreditCard(value);
      }
    ),
  cvv: yup.string(),
  validityDate: yup.string(),
  printedName: yup.string(),
  cpf: yup.string(),
  installments: yup.number(),
});
