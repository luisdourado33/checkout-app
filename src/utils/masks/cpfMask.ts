export const formatCPF = (cpf: string): string => {
  const cpfRegex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;

  const maxLength = 14;
  const truncated = cpf.substr(0, maxLength);

  const match = truncated.match(cpfRegex);

  if (match != null) {
    return match[1] + "." + match[2] + "." + match[3] + "-" + match[4];
  }

  return truncated;
};
