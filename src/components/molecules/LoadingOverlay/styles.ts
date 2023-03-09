import styled from "styled-components";

import { Container } from "components/atoms";

export const Overlay = styled(Container)`
  position: absolute;
  z-index: 999;
  box-sizing: border-box;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(4px);
`;
