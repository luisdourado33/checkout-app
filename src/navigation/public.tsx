import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Home, Success } from "components/pages";

export const mappedRoutes = createRoutesFromElements(
  <>
    <Route path="/" element={<Home />} />
    <Route path="/success" element={<Success />} />
  </>
);

export const publicRouter = createBrowserRouter(mappedRoutes);
