/* eslint-disable @typescript-eslint/strict-boolean-expressions */
export const getDiscountedValue = (
  planValue: number,
  discountAmount: number
): number => {
  if (planValue - discountAmount < 0) return 0;
  return planValue - discountAmount;
};

export const getPeriodLabel = (period: string): string => {
  const parsed: any = {
    annually: "Anual",
    monthly: "Mensal",
    weekly: "Semanal",
    daily: "Diário",
    default: "N/E",
  };

  return parsed[period] || parsed.default;
};

export const isNotUndefined = (item: any): boolean =>
  typeof item !== "undefined";
