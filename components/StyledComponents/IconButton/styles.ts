import styled from "styled-components";

export const ButtonIco = styled.button`
  outline: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font-size: 2.5rem;
  color: ${(props) => props.theme.pallet.color.baseMedium};
  margin-left: 1rem;
  transition: color 0.4s;

  &:hover {
    color: ${(props) => props.theme.pallet.color.baseDark};
  }
`;
