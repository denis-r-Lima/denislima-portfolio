import styled from "styled-components";

export const Container = styled.div`
  @media only screen and (max-width: 450px) {
    padding: 2rem;
  }
  & > p {
    text-indent: 2rem;
    line-height: 3rem;
  }
  position: relative;
  padding: 8rem;
  background-color: #415f8c;
  color: #fcf7f8;
  font-size: 1.8rem;
  text-align: justify;
  &#AboutMe {
    padding-bottom: 30rem;
  }
  &#Contact {
    & > p {
      text-align: center;
      & > a {
        color: #ced3dc;
        &:hover {
          font-weight: bold;
        }
      }
    }
  }
`;

export const AboutTitle = styled.h1`
  @media only screen and (max-width: 450px) {
    top: -1rem;
    left: -1rem;
  }
  position: relative;
  top: -3rem;
  left: -3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0rem 0 2rem 0;
`;

export const AboutContent = styled.div`
  white-space: pre-wrap;
`;
