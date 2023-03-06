import React from "react";

import { Brand, Header, Icon } from "components/atoms";
import { useTheme } from "styled-components";

export const AppHeader = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Header
      d="flex"
      align="center"
      justifyContent="space-between"
      px={theme.spacing.inline}
      py={theme.spacing.block}
    >
      <Icon iconName="arrow-left" />
      <span>Back</span>
      <Brand />
      <span></span>
    </Header>
  );
};
