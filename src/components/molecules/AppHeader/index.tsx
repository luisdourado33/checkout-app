import React from "react";

import { useTheme } from "styled-components";

import { Brand } from "components/atoms";
import { Header } from "./styles";

interface Props {
  hasBackButton?: boolean;
}
export const AppHeader: React.FC<Props> = ({ hasBackButton }): JSX.Element => {
  const theme = useTheme();
  const renderBackButton = (true ?? false) && <span>Back</span>;

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
