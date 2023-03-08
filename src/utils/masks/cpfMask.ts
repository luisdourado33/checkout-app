export const cpfMask = (cpf: string): string => {
  const cpfRegex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
  const match = cpf.match(cpfRegex);

  if (match != null) {
    return match[1] + "." + match[2] + "." + match[3] + "-" + match[4];
  } else {
    return cpf;
  }
};
