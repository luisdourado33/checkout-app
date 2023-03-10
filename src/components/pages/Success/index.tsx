import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "hooks/useReduxHook";
import { circleCheck } from "lib/icons";
import { selectAuthenticated, toggleIsFormFilled } from "store/reducers";
import { useTheme } from "styled-components";

import { Box, Button, Card, Container, Icon, Text } from "components/atoms";
import { BadgePlan } from "components/molecules";

import { Content } from "./styles";

export const Success: React.FC<any> = () => {
  const state: any = useAppSelector(selectAuthenticated);
  const dispatch = useAppDispatch();
  const theme = useTheme();

  useEffect(() => {
    console.log(state);
  });

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
          <BadgePlan
            offer={state?.selectedOffer}
            formFields={state?.formFields}
          />
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
            <Text color="#151516">{state?.formFields?.cpf}</Text>
          </Box>
        </Card>

        <Button w="fit-content" mb="24px" variant="text" disabled>
          <Text fontWeight="bold">Gerenciar assinaturas (indisponível)</Text>
        </Button>

        <Button
          variant="solid"
          mb="48px"
          onClick={() => {
            dispatch(toggleIsFormFilled());
          }}
        >
          IR PARA HOME
        </Button>
      </Content>
    </Container>
  );
};
