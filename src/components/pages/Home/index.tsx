import React from "react";

import { Container } from "components/atoms";
import { AppHeader } from "components/molecules";

export const Home: React.FC<any> = () => {
  return (
    <Container fluid>
      <AppHeader />

      <p>Lorem ipsum sit amet dolor</p>
    </Container>
  );
};

export default Home;
