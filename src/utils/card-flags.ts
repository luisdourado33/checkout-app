import americanExpress from "assets/credit-cards-flags/americanexpress.svg";
import dinnersClub from "assets/credit-cards-flags/dinnersclub.svg";
import elo from "assets/credit-cards-flags/elo.svg";
import masterCard from "assets/credit-cards-flags/mastercard.svg";
import visa from "assets/credit-cards-flags/visa.svg";

export interface CardFlagProps {
  name: string;
  flag: string;
  width?: string;
  height?: string;
}

export const cardFlags: CardFlagProps[] = [
  { name: "Mastercard", flag: masterCard },
  { name: "Dinners Club", flag: dinnersClub },
  { name: "American Express", flag: americanExpress },
  { name: "Visa", flag: visa },
  { name: "Elo", flag: elo },
];
