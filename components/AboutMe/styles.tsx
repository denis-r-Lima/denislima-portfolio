import styled from "styled-components"

export const Container = styled.div`
 @media only screen and (max-width: 450px) {
    padding: 2rem;
  }
  &>p{
      text-indent: 2rem;
      line-height: 3rem;
      text-align: justify;
  }
  position: relative;
  padding: 8rem;
  background-color: #415f8c;
  color: #fff;
  font-size: 2rem;
  &#AboutMe{
    padding-bottom: 30rem;
  }
`

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
`
