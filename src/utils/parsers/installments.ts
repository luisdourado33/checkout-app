export const getInstallment = (input: number): number => {
  let correctValue: number = input;

  if (input <= 0) {
    correctValue = 1;
  }

  if (input > 12) {
    correctValue = 12;
  }

  return correctValue;
};
