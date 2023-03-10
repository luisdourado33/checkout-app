import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "hooks/useReduxHook";
import { arrowLeft } from "lib/icons";
import { selectAuthenticated } from "store/reducers";
import { useTheme } from "styled-components";

import { Brand, Button, Icon } from "components/atoms";

import { Header } from "./styles";

export const AppHeader: React.FC<any> = (): JSX.Element => {
  const state = useAppSelector(selectAuthenticated);
  const theme = useTheme();
  const navigate = useNavigate();

  const showBackButton = state?.isFormFilled;

  const handleGoBack = (): void => {
    navigate("/");
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
