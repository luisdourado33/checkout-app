/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { useAppSelector } from "hooks/useReduxHook";
import { selectAuthenticated } from "store/reducers";

import { AppHeader } from "components/molecules";
import { Home, Success } from "components/pages";

const AppWrapper: React.FC<any> = ({ children }) => {
  const state = useAppSelector(selectAuthenticated);
  const conditionalRendering = state?.isFormFilled ? <Success /> : <Home />;

  return (
    <>
      <AppHeader />
      {conditionalRendering}
    </>
  );
};

export const mappedRoutes = createRoutesFromElements(
  <>
    <Route path="/" element={<AppWrapper />} />
  </>
);

export const publicRouter = createBrowserRouter(mappedRoutes);
