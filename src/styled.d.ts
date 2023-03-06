import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: {
        primary: string;
        secondary: string;
      };
      common: {
        lightGray: string;
        mediumGray: string;
        heavyGray: string;
      };
    };
    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    fontWeights: {
      light: string | number;
      normal: string | number;
      bold: string | number;
    };
    spacing: {
      inline: string;
      block: string;
    };
    breakpoints: {
      laptop: string;
      tablet: string;
      mobileL: string;
      mobileM: string;
      mobileS: string;
    };
    transition: {
      default: string;
    };
  }
}
