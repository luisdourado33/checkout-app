import { isValidCreditCard } from "../../../../src/utils/validators";

describe("Test suite for isValidCreditCard helper", () => {
  let correctInput: string, incorrectInput: string, expectedResult: string;

  beforeAll(() => {
    correctInput = "5494821418094760";
    incorrectInput = "5494-8214-1809";
  });

  it("should not be able to validate credit card", () => {
    const isValid = isValidCreditCard(incorrectInput);
    expect(isValid).toBeFalsy();
  });

  it("should be able to validate credit card", () => {
    const isValid = isValidCreditCard(correctInput);
    expect(isValid).toBeTruthy();
  });
});
