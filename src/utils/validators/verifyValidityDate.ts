export const isValidityDate = (value: string): boolean => {
  const regex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
  if (!regex.test(value)) {
    return false;
  }

  const [month, year] = value.split("/");
  const currentYear = new Date().getFullYear() % 100;

  const monthNumber = parseInt(month, 10);
  if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
    return false;
  }

  const yearNumber = parseInt(year, 10);
  if (
    isNaN(yearNumber) ||
    yearNumber < currentYear ||
    yearNumber > currentYear + 10
  ) {
    return false;
  }

  return true;
};
