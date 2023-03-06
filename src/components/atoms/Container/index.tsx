import React from "react";

import type { CSSProperties } from "styled-components";
import styled from "styled-components";

export interface ContainerProps {
  fluid?: boolean;
  children: React.ReactNode;
  style?: CSSProperties;
}

const CustomContainer = styled.div<ContainerProps>`
  padding-inline: ${({ fluid, theme }) =>
    fluid ?? false ? "0px" : theme.spacing.inline};
`;

export const Container: React.FC<ContainerProps> = (props) => {
  return <CustomContainer {...props}>{props.children}</CustomContainer>;
};
