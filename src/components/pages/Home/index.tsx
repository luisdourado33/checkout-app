import React, { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "hooks/useReduxHook";
import { iuguIcon } from "lib/icons";
import {
  fetchOffers,
  selectAuthenticated,
} from "store/reducers/authenticatedSlice";
import { useTheme } from "styled-components";
import { type CardFlagProps } from "utils/card-flags";
import { cardFlags } from "utils/card-flags";

import { Badge, Box, CardFlag, Container, Text } from "components/atoms";
import { PaymentForm, PlanList } from "components/organisms";

import { ContainerForm, Content } from "./styles";

export const Home: React.FC<any> = () => {
  const state = useAppSelector(selectAuthenticated);
  const dispatch = useAppDispatch();

  const themeConfig = useTheme();

  const renderCardFlags = useMemo(() => {
    return cardFlags.map((item: CardFlagProps) => (
      <CardFlag key={item.name} flag={item.flag} name={item.name} />
    ));
  }, cardFlags);

  useEffect(() => {
    void dispatch(fetchOffers());
  }, []);

  useEffect(() => {
    console.log(state.isLoading ? "Carregando" : "Carregado");
  }, [state.isLoading]);

  const callbackOnLoading = {
    opacity: state.isLoading ? "0.3" : "1",
    zIndex: state.isLoading ? "-4" : "1",
  };

  return (
    <Container
      fluid
      d="flex"
      flexDirection="column"
      position="relative"
      style={callbackOnLoading}
    >
      <Content
        fluid
        d="flex"
        flexDirection="row"
        justifyContent="space-evenly"
        py="50px"
      >
        <ContainerForm mx="10px" d="flex" h="100%" flexDirection="column">
          <Text fontSize="20px" fontWeight="400px" mb="9px">
            Estamos quase lá!
          </Text>

          <Text mb="30px">Insira seus dados de pagamento abaixo:</Text>
          <Box
            d="flex"
            align="center"
            justifyContent="center"
            mb="10px"
            gap="10px"
          >
            {renderCardFlags}
          </Box>
          <Box d="flex" align="center" justifyContent="center" mb="8px">
            <Text
              textAlign="center"
              fontSize="10px"
              color={themeConfig.colors.common.mediumGray}
              mr="7px"
            >
              Pagamento por
            </Text>
            <img src={iuguIcon} width={"29px"} height={"11px"} />
          </Box>
          <PaymentForm />
        </ContainerForm>
        <Box>
          <Text fontSize="20px" fontWeight="400px" mb="8px">
            Confira seu plano
          </Text>
          <Badge w="fit-content" my="10px">
            fulano@cicrano.com.br
          </Badge>
          <PlanList
            list={state.offers}
            dispatch={dispatch}
            selectedOfferId={state.selectedOfferId}
          />
        </Box>
      </Content>
    </Container>
  );
};
