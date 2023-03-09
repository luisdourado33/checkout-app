/* eslint-disable @typescript-eslint/strict-boolean-expressions */
export const formatCreditCardNumber = (input: string): string => {
  const digitsOnly = input.replace(/\D/g, "");

  const groups = digitsOnly.match(/.{1,4}/g);

  return groups ? groups.join("-") : "";
};
