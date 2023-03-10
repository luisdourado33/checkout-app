import React from "react";
import { type IOffer } from "@types";
import { circleStar } from "lib/icons";
import { useTheme } from "styled-components";
import { getCurrencyFormat } from "utils/masks";
import { getDiscountedValue, getPeriodLabel } from "utils/parsers";

import { Box, Icon, Text, Wrapper } from "components/atoms";

interface Props {
  offer?: IOffer;
}

export const BadgePlan: React.FC<Props> = (props) => {
  const theme = useTheme();

  const hasDiscount =
    props?.offer?.discountPercentage != null &&
    props?.offer?.discountPercentage > 0;
  const finalPrice = hasDiscount
    ? getDiscountedValue(
        props?.offer?.fullPrice ?? 0,
        props?.offer?.discountAmmount ?? 0
      )
    : props?.offer?.fullPrice;
  const monthlyInstallment: number =
    (typeof finalPrice !== "undefined" ? finalPrice : 1) /
    (typeof props?.offer?.installments !== "undefined" &&
    props?.offer?.installments > 0
      ? props?.offer?.installments
      : 1);

  return (
    <Box
      d="flex"
      justifyContent="space-between"
      align="center"
      px="20px"
      py="16px"
      borderRadius="15px"
      bgColor={theme.colors.common.lightGray}
    >
      <Icon icon={circleStar} />
      <Wrapper d="flex" flexDirection="column" align="flex-end">
        <Text
          fontSize="16px"
          fontWeight="400"
          mb="8px"
          color={theme.colors.main.primary}
        >
          {getPeriodLabel(props?.offer?.period ?? "")} |{" "}
          {props?.offer?.description ?? ""}
        </Text>
        <Text
          fontSize="14px"
          fontWeight="400"
          color={theme.colors.main.primary}
        >
          {getCurrencyFormat(finalPrice ?? 0)} |{" "}
          {props?.offer?.installments ?? 1}x{" "}
          {getCurrencyFormat(monthlyInstallment)}
        </Text>
      </Wrapper>
    </Box>
  );
};
