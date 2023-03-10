import React from "react";
import type { ICheckoutForm, IOffer } from "@types";
import { circleStar } from "lib/icons";
import { useTheme } from "styled-components";
import { getCurrencyFormat } from "utils/masks";
import { getDiscountedValue, getPeriodLabel } from "utils/parsers";

import { Box, Icon, Text, Wrapper } from "components/atoms";

interface Props {
  offer?: IOffer;
  formFields?: ICheckoutForm;
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

  const currentInstallments: number = Number(
    props?.formFields?.installments ?? 1
  );
  const monthlyInstallment: number =
    (finalPrice ?? 1) /
    (currentInstallments !== undefined ? currentInstallments : 1);

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
          {props?.formFields?.installments ?? 1}x{" "}
          {getCurrencyFormat(monthlyInstallment)}
        </Text>
      </Wrapper>
    </Box>
  );
};
