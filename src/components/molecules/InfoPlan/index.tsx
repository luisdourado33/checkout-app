import React from "react";

import { useTheme } from "styled-components";

import { InfoPlanCard } from "./styles";
import { Badge, Box, Text } from "components/atoms";

export const InfoPlan = (): any => {
  const theme = useTheme();
  return (
    <InfoPlanCard
      w="auto"
      h="100px"
      d="flex"
      flexDirection="column"
      justifyContent="center"
      style={{
        padding: "20px",
        borderRadius: "15px",
        border: `1px solid ${theme.colors.main.primary}`,
        marginBottom: "12px",
        cursor: "pointer",
      }}
    >
      <Text fontWeight="bold" color={theme.colors.main.primary}>
        Anual | À Vista
      </Text>
      <Box d="flex" justifyContent="space-between" align="center" my="4px">
        <Text>De R$ 514,80 | Por R$ 479,90</Text>
        <Badge
          style={{
            backgroundColor: theme.colors.main.secondary,
            color: "#ffff",
          }}
        >
          -15%
        </Badge>
        <input type="radio" />
      </Box>
      <Text color={theme.colors.main.secondary}>10x de R$ 43,69/mês</Text>
    </InfoPlanCard>
  );
};
