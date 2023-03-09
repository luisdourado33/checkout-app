/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import styled, { css } from "styled-components";

import { type ContainerProps } from "./container.types";

export const BaseContainer = styled.div<ContainerProps>`
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
    props.fluid &&
    css`
      width: 100%;
    `}
`;
