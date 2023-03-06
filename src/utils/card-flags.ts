import elo from "assets/credit-cards-flags/elo.svg";
import visa from "assets/credit-cards-flags/visa.svg";
import americanExpress from "assets/credit-cards-flags/americanexpress.svg";
import dinnersClub from "assets/credit-cards-flags/dinnersclub.svg";
import masterCard from "assets/credit-cards-flags/mastercard.svg";

export interface CardFlagProps {
  name: string;
  flag: string;
}

export const cardFlags: CardFlagProps[] = [
  { name: "Mastercard", flag: masterCard },
  { name: "Dinners Club", flag: dinnersClub },
  { name: "American Express", flag: americanExpress },
  { name: "Visa", flag: visa },
  { name: "Elo", flag: elo },
];
