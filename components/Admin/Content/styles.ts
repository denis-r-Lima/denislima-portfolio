import styled from "styled-components";

const mainColor = "hsl(204, 70%, 55%)";
const lighterColor = "hsl(204, 70%, 70%)";

const secondaryColor = "hsl(24, 90%, 55%)";
const secondaryLighter = "hsl(24, 90%, 70%)";

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

export const AboutTextArea = styled.textarea`
  width: 100%;
  padding: 2rem 1rem;
  font-size: 1.5rem;
  resize: none;
  outline: none;
  border: 2px solid ${mainColor};
  border-radius: 1rem;
  overflow: hidden;

  &:hover {
    overflow: auto;
  }

  transition: all linear 1s;

  &:focus {
    border: 2px solid ${lighterColor};
  }
`;

export const StyledInput = styled.input`
  width: 45%;
  min-width: 350px;
  font-size: 1.5rem;
  padding: 1rem;
  outline: none;
  border: 2px solid ${mainColor};
  border-radius: 1rem;
  transition: all linear 1s;

  &:focus {
    border: 2px solid ${lighterColor};
  }

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
  background-color: ${mainColor};
  justify-self: center;
  cursor: pointer;
  transition: background-color linear 0.5s;
  align-self: flex-end;
  &:hover {
    background-color: ${lighterColor};
  }
`;

export const AddButton = styled.button`
  height: 3rem;
  width: 3rem;
  outline: none;
  border: none;
  border-radius: 10rem;
  margin: 0 1rem;
  color: #fff;
  font-size: 2rem;
  background-color: ${secondaryColor};
  justify-self: center;
  cursor: pointer;
  transition: background-color linear 0.5s;
  align-self: flex-start;
  margin-bottom: 1rem;
  &:hover {
    background-color: ${secondaryLighter};
  }
`;
