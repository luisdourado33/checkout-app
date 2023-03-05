import React from "react";

import { ThemeProvider } from "providers/theme";
import { RouterProvider } from "react-router-dom";

import { publicRouter } from "navigation/public";

const Root = (): JSX.Element => {
  return (
    <ThemeProvider>
      <RouterProvider router={publicRouter} />
    </ThemeProvider>
  );
};

export default Root;
