import React from "react";
import { type IOffer } from "@types";
import { useTheme } from "styled-components";
import { getCurrencyFormat } from "utils/masks";
import { getDiscountedValue, getPeriodLabel } from "utils/parsers";

import { Badge, Box, Text } from "components/atoms";

import { InfoPlanCard } from "./styles";

interface InfoPlanProps {
  selected: number;
  onClick?: any;
}

type Props = Partial<IOffer> & InfoPlanProps;

export const InfoPlan = (props: Props): any => {
  const theme = useTheme();

  const fullPrice = getCurrencyFormat(props?.fullPrice ?? 0);
  const hasDiscount =
    props?.discountPercentage != null && props?.discountPercentage > 0;
  const finalPrice = hasDiscount
    ? getDiscountedValue(props?.fullPrice ?? 0, props?.discountAmmount ?? 0)
    : props?.fullPrice;
  const monthlyInstallment: number =
    (typeof finalPrice !== "undefined" ? finalPrice : 1) /
    (typeof props?.installments !== "undefined" && props?.installments > 0
      ? props?.installments
      : 1);

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
      onClick={props?.onClick}
    >
      <Text fontWeight="bold" color={theme.colors.main.primary}>
        {getPeriodLabel(props?.period ?? "")} | {props?.description}
      </Text>
      <Box d="flex" justifyContent="space-between" align="center" my="4px">
        <Text>
          De {fullPrice} | Por {getCurrencyFormat(finalPrice ?? 0)}
        </Text>
        <Badge bgColor={theme.colors.main.secondary} color="#ffff">
          -{(props?.discountPercentage ?? 0) * 100}%
        </Badge>
        <input type="radio" checked={props?.selected === props?.id} readOnly />
      </Box>
      <Text color={theme.colors.main.secondary}>
        {props?.installments ?? 1}x de {getCurrencyFormat(monthlyInstallment)}
        /mês
      </Text>
    </InfoPlanCard>
  );
};
