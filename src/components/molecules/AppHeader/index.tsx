import React, { useEffect, useState } from "react";
import { type Location } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { arrowLeft } from "lib/icons";
import { useTheme } from "styled-components";

import { Brand, Button, Icon } from "components/atoms";

import { Header } from "./styles";

interface HeaderProps {
  currentLocation: Location;
}

export const AppHeader: React.FC<HeaderProps> = ({
  currentLocation,
}): JSX.Element => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [showBackButton, setShowBackButton] = useState<boolean>(false);

  const handleGoBack = (): void => {
    navigate(-1);
  };

  const renderBackButton = showBackButton && (
    <Button variant="text" onClick={handleGoBack} p="0" flex="0 0 auto">
      <Icon icon={arrowLeft} />
    </Button>
  );

  useEffect(() => {
    if (currentLocation?.pathname === "/success") {
      setShowBackButton(true);
    }
  });

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
