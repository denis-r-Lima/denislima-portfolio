import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  font-size: 1.8rem;
  background-color: ${(props) => props.theme.admin.color.base};
  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

export const HalfGrid = styled.div`
  width: 50%;
  min-width: 350px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 450px) {
    width: 100%;
    min-width: 0;
  }
`;

export const SaveButton = styled.button`
  outline: none;
  border: none;
  border-radius: 1rem;
  color: #fff;
  font-size: 1.4rem;
  padding: 1rem 5rem;
  background-color: ${(props) => props.theme.pallet.color.primary};
  justify-self: center;
  cursor: pointer;
  transition: background-color linear 0.5s;
  align-self: flex-end;
  &:hover {
    background-color: ${(props) => props.theme.pallet.color.primaryLight};
  }
`;

export const PortfolioCardContainer = styled.div`
  @media only screen and (max-width: 450px) {
    grid-template-columns: auto;
    grid-template-rows: 30rem auto 10rem;
  }
  width: 100%;
  display: grid;
  grid-template-columns: 15rem auto 5rem;
  gap: 3rem;
  padding: 2rem;
  border: 1px solid #999;
  border-radius: 1rem;
  background-color: #f1f1f1;
  place-items: center;

  & > div:last-child {
    @media only screen and (max-width: 450px) {
      flex-direction: row;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: grid;
  place-items: center;
  z-index: 100;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem;
  width: 65%;
  min-width: 30rem;
  max-width: 80rem;
  background-color: ${(props) => props.theme.admin.color.base};
  border-radius: 1rem;
  font-size: 1.5rem;
  gap: 2rem;
`;

export const AddButton = styled.button`
  padding: 1rem 2rem;
  outline: none;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  background-color: ${(props) => props.theme.pallet.color.secondary};
  color: ${(props) => props.theme.pallet.color.base};
  transition: all 0.4s;
  &:hover {
    background-color: ${(props) => props.theme.pallet.color.secondaryLight};
  }
`;
