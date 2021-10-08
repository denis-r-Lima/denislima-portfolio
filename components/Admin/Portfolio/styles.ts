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

export const PortfolioCardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 15rem auto 5rem;
  gap: 3rem;
  padding: 2rem;
  border: 1px solid #999;
  border-radius: 1rem;
  background-color: #f1f1f1;
  place-items: center;
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
`;

export const StyledTextArea = styled.textarea`
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
