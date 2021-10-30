import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 5rem 10rem;
  font-size: 1.5rem;
  gap: 1rem;
  width: 40%;
  min-width: 300px;
`;

export const SubmitButton = styled.button`
  padding: 0.8rem 4rem;
  background-color: transparent;
  color: ${(props) => props.theme.pallet.color.primary};
  border: 3px solid ${(props) => props.theme.pallet.color.primary};
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 2rem auto;
  font-size: 1.5rem;
  font-weight: bold;
  &:hover {
    background-color: ${(props) => props.theme.pallet.color.primaryLight};
    color: ${(props) => props.theme.pallet.color.base};
  }
`;
