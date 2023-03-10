/* eslint-disable @typescript-eslint/strict-boolean-expressions */
export const formatCreditCardNumber = (input: string = ""): string => {
  const digitsOnly = input.replace(/\D/g, "");
  const maxLength = 19;

  const groups = digitsOnly.match(/.{1,4}/g);

  if (groups) {
    // Combine the groups into a single string separated by spaces
    let formatted = groups.join(" ");

    // Truncate the formatted string to the specified max length
    formatted = formatted.substr(0, maxLength);

    return formatted;
  }

  return "";
};

export const formatCVV = (input: string): string => {
  const maxLength = 3;
  const truncated = input.substr(0, maxLength);

  return truncated;
};
