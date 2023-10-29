import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 3rem;
  gap: 2rem;
  font-size: 1.5rem;
  background-color: ${(props) => props.theme.pallet.color.backgroundSecondary};
  color: ${(props) => props.theme.pallet.color.background};
`;
