import React from "react";
import { useTheme } from "styled-components";

import { Box, Icon, Wrapper, Text } from "components/atoms";
import { circleStar } from "assets/icons";

export const BadgePlan: React.FC<any> = () => {
  const theme = useTheme();
  return (
    <Box
      d="flex"
      justifyContent="space-between"
      align="center"
      px="20px"
      py="16px"
      style={{
        borderRadius: "15px",
        backgroundColor: theme.colors.common.lightGray,
      }}
    >
      <Icon icon={circleStar} />
      <Wrapper d="flex" flexDirection="column" align="flex-end">
        <Text
          fontSize="16px"
          fontWeight="400"
          style={{ marginBottom: "8px" }}
          color={theme.colors.main.primary}
        >
          Anual | Parcelado
        </Text>
        <Text
          fontSize="14px"
          fontWeight="400"
          color={theme.colors.main.primary}
        >
          R$ 479,90 | 10x R$ 47,99
        </Text>
      </Wrapper>
    </Box>
  );
};
