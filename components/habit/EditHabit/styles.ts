import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  font-size: 1.5rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem;
  background-color: ${(props) => props.theme.pallet.color.primaryVeryLight};
  width: 100rem;
  max-width: 90%;
  border-radius: 0.3rem;
  gap: 2rem;
`;

export const HabitCard = styled.div`
  padding: 2rem 3rem;
  background-color: ${(props) => props.theme.pallet.color.primaryVeryLight};
  width: 100rem;
  max-width: 90%;
  border-radius: 0.3rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    & svg {
      cursor: pointer;
    }
  }
`;
