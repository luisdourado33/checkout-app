import React from "react";

import type { CSSProperties } from "styled-components";
import styled from "styled-components";

export interface ContainerProps {
  fluid?: boolean;
  children: React.ReactNode;
  style?: CSSProperties;
}

const CustomContainer = styled.div<ContainerProps>`
  width: ${({ fluid, theme }) => (fluid ?? false ? "100%" : "80%")};
`;

export const Container: React.FC<ContainerProps> = (props) => {
  return <CustomContainer {...props}>{props.children}</CustomContainer>;
};
