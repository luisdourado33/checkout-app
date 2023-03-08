import React from "react";
import { circleCheck } from "lib/icons";
import { useTheme } from "styled-components";

import { Box, Button, Card, Container, Icon, Text } from "components/atoms";
import { BadgePlan } from "components/molecules";

import { Content } from "./styles";

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
          mb="71.8px"
        >
          Sua assinatura foi realizada com sucesso.
        </Text>

        <Card mb="88px">
          <BadgePlan />
          <Box
            d="flex"
            justifyContent="space-between"
            align="center"
            px="20px"
            pt="19px"
          >
            <Text color={theme.colors.common.mediumGray}>E-mail</Text>
            <Text color="#151516">fulano@cicrano.com.br</Text>
          </Box>

          <Box
            d="flex"
            justifyContent="space-between"
            align="center"
            px="20px"
            pt="19px"
          >
            <Text color={theme.colors.common.mediumGray}>CPF</Text>
            <Text color="#151516">000.000.000-00</Text>
          </Box>
        </Card>

        <Button w="fit-content" mb="24px" variant="text">
          <Text fontWeight="bold">Gerenciar assinaturas</Text>
        </Button>

        <Button variant="solid" mb="48px">
          IR PARA HOME
        </Button>
      </Content>
    </Container>
  );
};
