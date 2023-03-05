import React from "react";

import type { DefaultTheme } from "styled-components";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";

const theme: DefaultTheme = {};

export const ThemeProvider: React.FC<any> = ({ children }) => {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  );
};
