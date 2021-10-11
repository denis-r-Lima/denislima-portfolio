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
  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

export const StyledInput = styled.input`
  width: 45%;
  min-width: 350px;
  font-size: 1.5rem;
  padding: 1rem;
  outline: none;
  border: 2px solid ${(props) => props.theme.pallet.color.primary};
  border-radius: 1rem;
  transition: all linear 1s;

  &:focus {
    border: 2px solid ${(props) => props.theme.pallet.color.primaryLight};
  }

  @media only screen and (max-width: 450px) {
    width: 100%;
    min-width: 0;
  }
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 2rem 1rem;
  font-size: 1.5rem;
  resize: none;
  outline: none;
  border: 2px solid ${(props) => props.theme.pallet.color.primary};
  border-radius: 1rem;
  overflow: hidden;

  &:hover {
    overflow: auto;
  }

  transition: all linear 1s;

  &:focus {
    border: 2px solid ${(props) => props.theme.pallet.color.primaryLight};
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

export const IconButton = styled.button`
  cursor: pointer;
  padding: 0;
  margin: 0;
  outline: none;
  border: none;
  font-size: 1.8rem;
  background-color: transparent;
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
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem;
  width: 65%;
  min-width: 30rem;
  max-width: 80rem;
  background-color: #fefefe;
  border-radius: 1rem;
  font-size: 1.5rem;
  gap: 2rem;
`;
