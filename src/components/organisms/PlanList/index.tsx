/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import { type IOffer } from "@types";
import { setSelectedOffer, setSelectedOfferId } from "store/reducers";

import { Box } from "components/atoms";
import { InfoPlan } from "components/molecules";

interface Props {
  list: IOffer[];
  dispatch?: any;
  selectedOfferId?: any;
}

export const PlanList: React.FC<Props> = ({
  list,
  dispatch,
  selectedOfferId,
}): any => {
  const handleChangeSelected = (id: number): any => {
    dispatch(setSelectedOfferId(id));
    dispatch(setSelectedOffer(list.find((offer) => offer.id === id)!));
  };

  const renderItems = list?.map((item: IOffer, index: number) => (
    <InfoPlan
      key={item.id}
      {...item}
      selected={selectedOfferId ?? 0}
      onClick={() => handleChangeSelected(item.id)}
    />
  ));

  return <Box>{renderItems}</Box>;
};
