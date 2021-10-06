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
  border: 1px solid #333;
  border-radius: 1.5rem;
  font-size: 1.5rem;
  gap: 1rem;
  width: 40%;
  min-width: 300px;
`;

export const SubmitButton = styled.button`
  padding: 0.8rem 4rem;
  background-color: transparent;
  color: #00aa45;
  border: 3px solid #00aa45;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 2rem auto;
  font-size: 1.5rem;
  font-weight: bold;
  &:hover {
    background-color: rgba(0, 200, 0, 0.5);
  }
`;

export const FormInputs = styled.input`
  outline: none;
  padding: 1rem;
  font-size: 1.3rem;
  border: none;
  border-bottom: 2px solid;
  background-color: transparent;
  &:focus {
    border-color: #00aa45;
  }
`;
