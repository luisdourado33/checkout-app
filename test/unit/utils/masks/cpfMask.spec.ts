import { cpfMask } from "../../../../src/utils/masks";

describe("Suite for cpfMask function", () => {
  let correctInput: string, incorrectInput: string, expectedResult: string;

  beforeAll(() => {
    correctInput = "11111111111";
    incorrectInput = "111111111112";
    expectedResult = "111.111.111-11";
  });

  it("should not be able to format current CPF (digits exceeded)", () => {
    const formattedCPF: string = cpfMask(incorrectInput);
    expect(formattedCPF).not.toEqual(expectedResult);
  });

  it("should be able to format current CPF", () => {
    const formattedCPF = cpfMask(correctInput);
    expect(formattedCPF).toEqual(expectedResult);
  });
});
