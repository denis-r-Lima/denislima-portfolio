import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: ${(props) => props.theme.admin.color.base};
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
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 2rem auto;
  font-size: 1.5rem;
  font-weight: bold;
  transition: all 0.4s;
  &:hover {
    background-color: ${(props) => props.theme.pallet.color.primaryVeryLight};
  }
`;
