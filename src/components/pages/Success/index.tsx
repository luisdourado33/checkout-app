import React from "react";
import { useTheme } from "styled-components";

import { BadgePlan } from "components/molecules";
import { Box, Button, Card, Container, Icon, Text } from "components/atoms";

import { Content } from "./styles";

import { circleCheck } from "assets/icons";

export const Success: React.FC<any> = () => {
  const theme = useTheme();
  return (
    <Container fluid d="flex" flexDirection="column" h="100%">
      <Content fluid d="flex" flexDirection="column" align="center">
        <Icon
          icon={circleCheck}
          width="60px"
          style={{
            marginBlock: "18.2px",
          }}
        />
        <Text
          fontSize="20px"
          fontWeight="400"
          my="11px"
          color={theme.colors.main.primary}
        >
          Parabéns!
        </Text>

        <Text
          fontSize="20px"
          fontWeight="400"
          w="250px"
          textAlign="center"
          color={theme.colors.common.mediumGray}
          style={{
            marginBottom: "71.8px",
          }}
        >
          Sua assinatura foi realizada com sucesso.
        </Text>

        <Card style={{ marginBottom: "88px" }}>
          <BadgePlan />
          <Box
            d="flex"
            justifyContent="space-between"
            align="center"
            px="20px"
            style={{
              paddingTop: "19px",
            }}
          >
            <Text color={theme.colors.common.mediumGray}>E-mail</Text>
            <Text color="#151516">fulano@cicrano.com.br</Text>
          </Box>

          <Box
            d="flex"
            justifyContent="space-between"
            align="center"
            px="20px"
            style={{
              paddingTop: "19px",
            }}
          >
            <Text color={theme.colors.common.mediumGray}>CPF</Text>
            <Text color="#151516">000.000.000-00</Text>
          </Box>
        </Card>

        <Button
          variant="text"
          style={{ width: "fit-content", marginBottom: "24px" }}
        >
          <Text fontWeight="bold">Gerenciar assinaturas</Text>
        </Button>

        <Button variant="solid" style={{ marginBottom: "48px" }}>
          IR PARA HOME
        </Button>
      </Content>
    </Container>
  );
};
