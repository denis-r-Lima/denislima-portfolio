import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  font-size: 1.8rem;
`;

export const AboutTextArea = styled.textarea`
  width: 100%;
  padding: 5rem;
  font-size: 1.5rem;
  resize: none;
  outline: none;
  border: 2px solid #3498db;
  border-radius: 1rem;
  overflow: hidden;

  &:hover {
    overflow: auto;
  }
`;
