/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import styled, { css } from "styled-components";

import type { CardProps } from "./card.types";

export const BaseCard = styled.div<CardProps>`
  border-radius: 15px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  background-color: #ffff;
  min-width: 343px;
  padding: 16px;

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
    props.mb &&
    css`
      margin-bottom: ${props.mb};
    `}
`;
