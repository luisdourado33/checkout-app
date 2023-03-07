import styled from "styled-components";

import { Header as AtomHeader } from "components/atoms";

export const Header = styled(AtomHeader)`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`;
