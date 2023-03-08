/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import styled, { css } from "styled-components";

import type { BoxProps } from "./box.types";

export const BaseBox = styled.div<BoxProps>`
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
    props.flexDirection &&
    css`
      flex-direction: ${props.flexDirection};
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
    props.pt &&
    css`
      padding-top: ${props.pt};
    `}

      ${(props) =>
    props.pb &&
    css`
      padding-bottom: ${props.pb};
    `}

    ${(props) =>
    props.p &&
    css`
      padding: ${props.p};
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

    ${(props) =>
    props.mb &&
    css`
      margin-bottom: ${props.mb};
    `}

    ${(props) =>
    props.borderRadius &&
    css`
      border-radius: ${props.borderRadius};
    `}

    ${(props) =>
    props.bgColor &&
    css`
      background-color: ${props.bgColor};
    `}

      ${(props) =>
    props.gap &&
    css`
      gap: ${props.gap};
    `}

    ${(props) =>
    props.borderRadius &&
    css`
      border-radius: ${props.borderRadius};
    `}

    ${(props) =>
    props.border &&
    css`
      border: ${props.border};
    `}

      ${(props) =>
    props.cursor &&
    css`
      cursor: ${props.cursor};
    `}
`;
