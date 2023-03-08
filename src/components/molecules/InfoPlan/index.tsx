import React from "react";
import { useTheme } from "styled-components";

import { Badge, Box, Text } from "components/atoms";

import { InfoPlanCard } from "./styles";

export const InfoPlan = (): any => {
  const theme = useTheme();
  return (
    <InfoPlanCard
      w="auto"
      h="100px"
      d="flex"
      p="20px"
      mb="12px"
      cursor="pointer"
      borderRadius="15px"
      flexDirection="column"
      justifyContent="center"
    >
      <Text fontWeight="bold" color={theme.colors.main.primary}>
        Anual | À Vista
      </Text>
      <Box d="flex" justifyContent="space-between" align="center" my="4px">
        <Text>De R$ 514,80 | Por R$ 479,90</Text>
        <Badge bgColor={theme.colors.main.secondary} color="#ffff">
          -15%
        </Badge>
        <input type="radio" />
      </Box>
      <Text color={theme.colors.main.secondary}>10x de R$ 43,69/mês</Text>
    </InfoPlanCard>
  );
};
