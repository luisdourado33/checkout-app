import React from "react";
import { RouterProvider } from "react-router-dom";
import { GlobalStyle, ThemeProvider } from "lib/theme";
import { publicRouter } from "navigation/public";

const Root = (): JSX.Element => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <RouterProvider router={publicRouter} />
    </ThemeProvider>
  );
};

export default Root;
