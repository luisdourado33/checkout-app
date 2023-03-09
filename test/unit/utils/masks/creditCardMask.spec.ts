import { formatCreditCardNumber } from "../../../../src/utils/masks";

interface CreditCardProps {
  correctCreditCard?: string;
  incorrectCreditCard?: string;
  expectedValue?: string;
}

describe("Test suite for formatCreditCardNumber function", () => {
  let sut: CreditCardProps;

  beforeAll(() => {
    sut = {
      correctCreditCard: "5481415732061202",
      incorrectCreditCard: "548141573206",
      expectedValue: "5481-4157-3206-1202",
    };
  });

  it("should not be able to validate credit card", () => {
    const maskedCreditCard: string = formatCreditCardNumber(
      sut.incorrectCreditCard!
    );
    expect(maskedCreditCard).not.toEqual(sut.expectedValue);
  });

  it("should be able to validate credit card", () => {
    const maskedCreditCard: string = formatCreditCardNumber(
      sut.correctCreditCard!
    );
    expect(maskedCreditCard).toEqual(sut.expectedValue);
  });
});
