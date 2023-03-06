import type { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    main: {
      primary: "#191847",
      secondary: "#F5850B",
    },
    common: {
      lightGray: "#F4F3F6",
      mediumGray: "#B0B0B0",
      heavyGray: "#727272",
    },
  },
  fontSizes: {
    xs: "0.8rem",
    sm: "1.0rem",
    md: "1.5rem",
    lg: "3rem",
    xl: "4.5rem",
  },
  fontWeights: {
    light: 100,
    normal: 300,
    bold: 500,
  },
  spacing: {
    inline: "4.25rem",
    block: "1.475rem",
  },
  breakpoints: {
    laptop: "1024px",
    tablet: "768px",
    mobileL: "425px",
    mobileM: "375px",
    mobileS: "320px",
  },
  transition: {
    default: "all 0.2s cubic-bezier(0.64, 0.57, 0.67, 1.53)",
  },
};
