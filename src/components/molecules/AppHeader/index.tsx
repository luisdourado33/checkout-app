import React, { useEffect, useState } from "react";
import type { Location } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { arrowLeft } from "assets/icons";
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
    <Button variant="text" onClick={handleGoBack}>
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
      px={theme.spacing.inline}
      py={theme.spacing.block}
    >
      {renderBackButton}
      <Brand style={{ margin: "0 auto" }} />
    </Header>
  );
};
