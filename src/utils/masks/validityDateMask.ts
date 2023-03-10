export const validityDateMask = (input: string): string => {
  const digitsOnly = input.replace(/\D/g, "");

  const maxLength = 4;
  const truncated = digitsOnly.substr(0, maxLength);

  const formatted = truncated.replace(/(\d{2})(\d{0,2})/, "$1/$2");

  return formatted;
};
