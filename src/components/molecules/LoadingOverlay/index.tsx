import React from "react";

import { Brand, Text } from "components/atoms";

import { Overlay } from "./styles";

export const LoadingOverlay = (): any => {
  return (
    <Overlay
      d="flex"
      align="center"
      justifyContent="center"
      flexDirection="column"
      w="100%"
      h="100%"
    >
      <Brand />
      <Text mt="20px">Carregando informações</Text>
    </Overlay>
  );
};
