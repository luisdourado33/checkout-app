import React from "react";
// import { useTheme } from "styled-components";

import { Container, Box } from "components/atoms";
import { AppHeader } from "components/molecules";

export const Home: React.FC<any> = () => {
  // const theme = useTheme();
  return (
    <Container fluid h="100%">
      <AppHeader />
      <Container fluid d="flex" justifyContent="center">
        <Box mx={"10px"}>
          <h1>First Box</h1>
        </Box>
        <Box mx={"10px"}>
          <h1>Second box</h1>
        </Box>
      </Container>
    </Container>
  );
};

export default Home;
