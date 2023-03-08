/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import styled, { css } from "styled-components";

import type { BadgeProps } from "./badge.types";

export const BaseBadge = styled.p<BadgeProps>`
  box-sizing: border-box;
  padding: 4px 9px;
  border: 1px solid ${({ theme }) => theme.colors.common.lightGray};
  border-radius: 15px;
  font-size: 12px;

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
    props.bgColor &&
    css`
      background-color: ${props.bgColor};
    `}

    ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
`;
