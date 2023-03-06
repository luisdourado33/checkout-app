/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import styled, { css } from "styled-components";
import type { HeaderProps } from "./header.types";

export const BaseHeader = styled.header<HeaderProps>`
  ${(props) =>
    props.d &&
    css`
      display: ${props.d};
    `}

  ${(props) =>
    props.align &&
    css`
      align-items: ${props.align};
    `}

  ${(props) =>
    props.justifyItems &&
    css`
      justify-items: ${props.justifyItems};
    `}

  ${(props) =>
    props.justifyContent &&
    css`
      justify-content: ${props.justifyContent};
    `}

  ${(props) =>
    props.w &&
    css`
      width: ${props.w};
    `}

  ${(props) =>
    props.px &&
    css`
      padding-inline: ${props.px};
    `}

  ${(props) =>
    props.py &&
    css`
      padding-block: ${props.py};
    `}

  ${(props) =>
    props.mx &&
    css`
      margin-inline: ${props.mx};
    `}

  ${(props) =>
    props.my &&
    css`
      margin-block: ${props.my};
    `}
`;
