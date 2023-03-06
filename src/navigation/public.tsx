import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home from "components/pages/Home";

export const mappedRoutes = createRoutesFromElements(
  <>
    <Route path="/" element={<Home />} />
  </>
);

export const publicRouter = createBrowserRouter(mappedRoutes);
