/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import styled, { css } from "styled-components";

import { type ButtonProps } from "./button.types";

export const BaseButton = styled.button<ButtonProps>`
  border-radius: 25px;
  cursor: pointer;
  font-weight: 400;
  padding: 10px 60px;

  ${({ variant, theme }) =>
    variant === "solid" &&
    css`
      background-color: ${theme.colors.main.primary};
      color: #ffff;
      border: unset;
    `}

  ${({ theme, disabled }) =>
    disabled &&
    css`
      background-color: ${theme.colors.common.lightGray};
      color: ${theme.colors.main.primary};
    `}

  ${({ variant, theme }) =>
    variant === "outline" &&
    css`
      background-color: transparent;
      color: ${theme.colors.main.primary};
      border: 1px solid ${theme.colors.main.primary};
    `}

    ${({ variant, theme }) =>
    variant === "text" &&
    css`
      background-color: transparent;
      color: ${theme.colors.main.primary};
      border: unset;
    `}

    ${(props) =>
    props.w &&
    css`
      width: ${props.w};
    `}

    ${(props) =>
    props.p &&
    css`
      padding: ${props.p};
    `}

    ${(props) =>
    props.mt &&
    css`
      margin-top: ${props.mt};
    `}

      ${(props) =>
    props.mr &&
    css`
      margin-right: ${props.mr};
    `}

    ${(props) =>
    props.mb &&
    css`
      margin-bottom: ${props.mb};
    `}

    ${(props) =>
    props.ml &&
    css`
      margin-left: ${props.ml};
    `}

    ${(props) =>
    props.flex &&
    css`
      flex: ${props.flex};
    `}
`;
