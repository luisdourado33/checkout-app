import React from "react";

import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import { theme as themeConfig } from "./theme.config";

export const ThemeProvider: React.FC<any> = ({ children }) => {
  return (
    <StyledComponentsThemeProvider theme={themeConfig}>
      {children}
    </StyledComponentsThemeProvider>
  );
};
