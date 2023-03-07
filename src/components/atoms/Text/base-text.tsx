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
    props.textAlign &&
    css`
      text-align: ${props.textAlign};
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

    ${(props) =>
    props.my &&
    css`
      margin-block: ${props.my};
    `}

      ${(props) =>
    props.mx &&
    css`
      margin-inline: ${props.mx};
    `}


    ${(props) =>
    props.w &&
    css`
      width: ${props.w};
    `}

      ${(props) =>
    props.h &&
    css`
      height: ${props.h};
    `}
`;
