import React from "react";

import { Box } from "components/atoms";
import { InfoPlan } from "components/molecules";

export const PlanList = (): any => {
  const renderItems = [1, 2, 3].map((item: any, index: number) => (
    <InfoPlan key={index} />
  ));

  return <Box>{renderItems}</Box>;
};
