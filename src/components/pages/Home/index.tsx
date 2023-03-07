import React, { useMemo } from "react";

import { useTheme } from "styled-components";

import { cardFlags } from "utils";
import type { CardFlagProps } from "utils";

import { AppHeader } from "components/molecules";
import { PaymentForm, PlanList } from "components/organisms";

import { Container, Box, Text, CardFlag, Badge } from "components/atoms";
import { ContainerForm, Content } from "./styles";

import iuguIcon from "assets/icons/iugu.svg";

export const Home: React.FC<any> = () => {
  const themeConfig = useTheme();
  const renderCardFlags = useMemo(() => {
    return cardFlags.map((item: CardFlagProps) => (
      <CardFlag key={item.name} flag={item.flag} name={item.name} />
    ));
  }, cardFlags);

  return (
    <Container fluid d="flex" flexDirection="column">
      <AppHeader />
      <Content
        fluid
        d="flex"
        flexDirection="row"
        justifyContent="space-evenly"
        py="50px"
      >
        <ContainerForm mx="10px" d="flex" h="100%" flexDirection="column">
          <Text
            fontSize="20px"
            fontWeight="400px"
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
            justifyContent="center"
            style={{
              marginBottom: "10px",
              gap: "10px",
            }}
          >
            {renderCardFlags}
          </Box>
          <Box
            d="flex"
            align="center"
            justifyContent="center"
            style={{ marginBottom: 8 }}
          >
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
        </ContainerForm>
        <Box>
          <Text
            fontSize="20px"
            fontWeight="400px"
            style={{ marginBottom: "8px" }}
          >
            Confira seu plano
          </Text>
          <Badge w="fit-content" my="10px">
            fulano@cicrano.com.br
          </Badge>
          <PlanList />
        </Box>
      </Content>
    </Container>
  );
};

export default Home;
