import styled from "styled-components";

interface Props {
  color?: string;
}

export const Container = styled.div<Props>`
  padding: 1rem 5rem;
  position: fixed;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  color: ${(props) => props.theme.pallet.color.background};
  background-color: ${(props) =>
    props.color || props.theme.pallet.color.primary};
  z-index: 1000;
  font-size: 1.4rem;
  border-radius: 1rem;
`;
