export const isValidCreditCard = (creditCardNumber: string): boolean => {
  const digitsOnly = creditCardNumber.replace(/\D/g, "");

  if (digitsOnly.length === 0 || /\D/.test(digitsOnly)) {
    return false;
  }

  let sum = 0;
  let shouldDouble = false;
  for (let i = digitsOnly.length - 1; i >= 0; i--) {
    let digit = parseInt(digitsOnly.charAt(i));

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
};
