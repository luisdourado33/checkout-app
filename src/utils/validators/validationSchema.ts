import * as yup from "yup";

import { isValidCPF } from "./verifyCpf";
import { isValidCreditCard } from "./verifyCreditCard";
import { isValidityDate } from "./verifyValidityDate";

export const validationSchema = yup.object().shape<any>({
  creditCardNumber: yup
    .string()
    .required("Campo obrigatório")
    .test("is-invalid-credit-card", "Formato/cartão inválido", (value: any) => {
      return isValidCreditCard(value);
    }),
  cvv: yup.string().required("Campo obrigatório").length(3, "3 dígitos"),
  validityDate: yup
    .string()
    .required("Campo obrigatório")
    .test("is-invalid-validity-date", "Data inválida", (value: any) => {
      return isValidityDate(value);
    }),
  printedName: yup.string().required("Campo obrigatório"),
  cpf: yup
    .string()
    .required("Campo obrigatório")
    .test("is-invalid-cpf", "Formato inválido", (value: any) => {
      return isValidCPF(value);
    }),
});
