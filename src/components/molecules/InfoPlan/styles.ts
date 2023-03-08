import styled from "styled-components";

import { Box } from "components/atoms";

export const InfoPlanCard = styled(Box)`
  transition: all 0.2s;
  min-width: 330px;
  border: 1px solid ${({ theme }) => theme.colors.main.primary};

  &:hover {
    transform: scale(1.009);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
    min-width: auto;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    display: flex;
    justify-content: column;
    font-size: 12px;
  }
`;
