import styled from "styled-components";

import { Box, Container as AtomContainer } from "components/atoms";

export const Content = styled(AtomContainer)`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    padding-inline: ${({ theme }) => theme.spacing.inline};
  }
`;

export const ContainerForm = styled(Box)``;
