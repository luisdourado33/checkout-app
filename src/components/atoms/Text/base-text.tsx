/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import styled, { css } from "styled-components";
import type { TextProps } from "./text.types";

export const BaseText = styled.p<TextProps>`
  ${(props) =>
    props.fontWeight &&
    css`
      font-weight: ${props.fontWeight};
    `}

  ${(props) =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize};
    `}

      ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
`;
