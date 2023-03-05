import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const Home = (): any => <div>Home component</div>;

export const mappedRoutes = createRoutesFromElements(
  <>
    <Route path="/" element={<Home />} />
  </>
);

export const publicRouter = createBrowserRouter(mappedRoutes);
