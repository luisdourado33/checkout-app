import React from "react";
import { RouterProvider } from "react-router-dom";
import { publicRouter } from "navigation/public";
import { GlobalStyle, ThemeProvider } from "providers/theme";

const Root = (): JSX.Element => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <RouterProvider router={publicRouter} />
    </ThemeProvider>
  );
};

export default Root;
