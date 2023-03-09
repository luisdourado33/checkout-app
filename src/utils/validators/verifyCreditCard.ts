export const isValidCreditCard = (input: string): boolean => {
  const digitsOnly = input.replace(/\D/g, "");

  if (!/^\d{13,19}$/.test(digitsOnly)) {
    return false;
  }

  const reversedDigits = digitsOnly.split("").reverse().map(Number);

  let checksum = 0;
  for (let i = 0; i < reversedDigits.length; i++) {
    let digit = reversedDigits[i];

    if (i % 2 === 1) {
      digit *= 2;
    }

    if (digit > 9) {
      digit -= 9;
    }

    checksum += digit;
  }

  return checksum % 10 === 0;
};
