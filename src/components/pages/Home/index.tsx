import React, { useMemo } from "react";

import { useTheme } from "styled-components";

import { cardFlags } from "utils";
import type { CardFlagProps } from "utils";

import { AppHeader } from "components/molecules";
import { PaymentForm } from "components/organisms";
import { Container, Box, Text, CardFlag } from "components/atoms";

import iuguIcon from "assets/icons/iugu.svg";

export const Home: React.FC<any> = () => {
  const themeConfig = useTheme();
  const renderCardFlags = useMemo(() => {
    return cardFlags.map((item: CardFlagProps) => (
      <CardFlag key={item.name} flag={item.flag} name={item.name} />
    ));
  }, cardFlags);

  return (
    <Container fluid h="100%">
      <AppHeader />
      <Container fluid d="flex" h="80%" justifyContent="center">
        <Box mx="10px" d="flex" flexDirection="column" w="fit-content" h="100%">
          <Text
            fontSize="20px"
            fontWeight="bold"
            style={{ marginBottom: "9px" }}
          >
            Estamos quase lá!
          </Text>

          <Text style={{ marginBottom: "30px" }}>
            Insira seus dados de pagamento abaixo:
          </Text>
          <Box
            d="flex"
            align="center"
            justifyContent="space-evenly"
            style={{
              marginBottom: "10px",
            }}
          >
            {renderCardFlags}
          </Box>
          <Box d="flex" align="center" justifyContent="center">
            <Text
              textAlign="center"
              fontSize="10px"
              color={themeConfig.colors.common.mediumGray}
              style={{ marginRight: 7 }}
            >
              Pagamento por
            </Text>
            <img src={iuguIcon} width={"29px"} height={"11px"} />
          </Box>
          <PaymentForm />
        </Box>
        {/* <Box mx={"10px"}>
          <h1>Second box</h1>
        </Box> */}
      </Container>
    </Container>
  );
};

export default Home;
