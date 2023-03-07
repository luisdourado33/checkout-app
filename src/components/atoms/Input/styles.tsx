import styled from "styled-components";
import { BaseInput } from "./base-input";

export const Label = styled.label`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.common.heavyGray};
`;
export const InputComponent = styled(BaseInput)`
  width: 100%;
  padding: 10px 0;
  border-top: none;
  border-right: none;
  border-left: none;
  outline: none;
  font-size: 16px;
  line-height: 20.83px;
  color: #191847;
  border-color: ${({ theme }) => theme.colors.common.lightGray};
  transition: ${({ theme }) => theme.transition.default};
  :focus {
    border-color: ${({ theme }) => theme.colors.main.primary};
  }
`;
