import React from "react";

import { ThemeProvider, GlobalStyle } from "providers/theme";
import { RouterProvider } from "react-router-dom";

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
