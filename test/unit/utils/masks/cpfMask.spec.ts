import { cpfMask } from "../../../../src/utils/masks";

describe("Test suite for cpfMask function", () => {
  let correctInput: string, incorrectInput: string, valueExpected: string;

  beforeAll(() => {
    correctInput = "11111111111";
    incorrectInput = "111111111112";
    valueExpected = "111.111.111-11";
  });

  it("should not be able to format current CPF (digits exceeded)", () => {
    const formattedCPF: string = cpfMask(incorrectInput);

    expect(formattedCPF).not.toEqual(valueExpected);
  });

  it("should be able to format current CPF", () => {
    const formattedCPF = cpfMask(correctInput);

    expect(formattedCPF).toEqual(valueExpected);
  });
});
