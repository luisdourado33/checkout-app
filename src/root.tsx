import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { GlobalStyle, ThemeProvider } from "lib/theme";
import { publicRouter } from "navigation/public";
import { applicationStore } from "store/application-store";

const Root = (): JSX.Element => {
  return (
    <ThemeProvider>
      <ReduxProvider store={applicationStore}>
        <GlobalStyle />
        <RouterProvider router={publicRouter} />
      </ReduxProvider>
    </ThemeProvider>
  );
};

export default Root;
