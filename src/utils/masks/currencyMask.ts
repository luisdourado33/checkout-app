export const getCurrencyFormat = (
  value: number,
  currency: string = "BRL"
): string => {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency }).format(
    value
  );
};
