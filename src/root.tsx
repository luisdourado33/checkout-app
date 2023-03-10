import React from "react";
import { RouterProvider } from "react-router-dom";
import * as dotenv from "dotenv";
import { useAppSelector } from "hooks/useReduxHook";
import { GlobalStyle, ThemeProvider } from "lib/theme";
import { publicRouter } from "navigation/public";
import { selectAuthenticated } from "store/reducers";

import { LoadingOverlay } from "components/molecules";
dotenv.config();

const Root = (): JSX.Element => {
  const state = useAppSelector(selectAuthenticated);
  const renderLoadingOverlay = state.isLoading && <LoadingOverlay />;

  return (
    <ThemeProvider>
      <GlobalStyle />
      {renderLoadingOverlay}
      <RouterProvider router={publicRouter} />
    </ThemeProvider>
  );
};

export default Root;
