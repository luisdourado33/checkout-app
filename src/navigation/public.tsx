import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Container } from "components/atoms";

const Home = (): any => {
  return (
    <Container>
      <h1>Hello World!</h1>
    </Container>
  );
};

export const mappedRoutes = createRoutesFromElements(
  <>
    <Route path="/" element={<Home />} />
  </>
);

export const publicRouter = createBrowserRouter(mappedRoutes);
