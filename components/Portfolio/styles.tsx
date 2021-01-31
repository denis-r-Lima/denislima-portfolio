import styled from 'styled-components';

export const Container = styled.div`
  @media only screen and (max-width: 450px) {
    padding: 2rem;
  }
  position: relative;
  padding: 8rem;
  background-color: #fcf7f8;
  color: #5b616a;
  font-size: 2rem;
`;


export const PortfolioTitle = styled.h1`
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