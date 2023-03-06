import styled, { css } from "styled-components";

import type { ButtonProps } from "./button.types";

export const BaseButton = styled.button<ButtonProps>`
  padding: 10px 60px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 400;

  ${({ variant, theme }) =>
    variant === "solid" &&
    css`
      background-color: ${theme.colors.main.primary};
      color: #ffff;
      border: unset;
    `}

  ${({ variant, theme }) =>
    variant === "outline" &&
    css`
      background-color: transparent;
      color: ${theme.colors.main.primary};
      border: 1px solid ${theme.colors.main.primary};
    `}
`;
