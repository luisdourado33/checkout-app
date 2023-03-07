import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  useLocation,
} from "react-router-dom";

import { Home, Success } from "components/pages";
import { AppHeader } from "components/molecules";

const AppWrapper: React.FC<any> = ({ children }) => {
  const location = useLocation();

  return (
    <>
      <AppHeader currentLocation={location} />
      {children}
    </>
  );
};

export const mappedRoutes = createRoutesFromElements(
  <>
    <Route
      path="/"
      element={
        <AppWrapper>
          <Home />
        </AppWrapper>
      }
    />
    <Route
      path="/success"
      element={
        <AppWrapper>
          <Success />
        </AppWrapper>
      }
    />
  </>
);

export const publicRouter = createBrowserRouter(mappedRoutes);
