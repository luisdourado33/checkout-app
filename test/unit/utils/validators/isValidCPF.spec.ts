import { isValidCPF } from "../../../../src/utils/validators";

describe("Test suite for isValidCPF helper", () => {
  let correctInput: string, incorrectInput: string, expectedResult: string;

  beforeAll(() => {
    correctInput = "111.111.111-11";
    incorrectInput = "11111111111";
  });

  it("should not be able to validate CPF", () => {
    const isValid = isValidCPF(incorrectInput);
    expect(isValid).toBeFalsy();
  });

  it("should be able to validate CPF", () => {
    const isValid = isValidCPF(correctInput);
    expect(isValid).toBeTruthy();
  });
});
