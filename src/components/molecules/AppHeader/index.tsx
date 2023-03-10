import React from "react";
import { useAppDispatch, useAppSelector } from "hooks/useReduxHook";
import { arrowLeft } from "lib/icons";
import { selectAuthenticated, toggleIsFormFilled } from "store/reducers";
import { useTheme } from "styled-components";

import { Brand, Button, Icon } from "components/atoms";

import { Header } from "./styles";

export const AppHeader: React.FC<any> = (): JSX.Element => {
  const state = useAppSelector(selectAuthenticated);
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const showBackButton = state?.isFormFilled;

  const handleGoBack = (): void => {
    dispatch(toggleIsFormFilled());
  };

  const renderBackButton = showBackButton && (
    <Button variant="text" onClick={handleGoBack} p="0" flex="0 0 auto">
      <Icon icon={arrowLeft} />
    </Button>
  );

  return (
    <Header
      d="flex"
      align="center"
      justifyContent="flex-start"
      px="68px"
      py={theme.spacing.block}
      position="relative"
    >
      {renderBackButton}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Brand />
      </div>
    </Header>
  );
};
