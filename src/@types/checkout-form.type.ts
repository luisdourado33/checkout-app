export interface ICheckoutForm {
  creditCardNumber: string;
  cvv: string;
  validityDate: string;
  printedName: string;
  cpf: string;
  coupomCode?: string;
  installments: number;
}
