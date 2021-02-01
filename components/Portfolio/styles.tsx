import styled from "styled-components"

export const Container = styled.div`
  @media only screen and (max-width: 450px) {
    padding: 2rem;
  }
  position: relative;
  padding: 8rem;
  background-color: #fcf7f8;
  color: #5b616a;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
`

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

export const PortfolioContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-self: center;
`

export const PortfolioCard = styled.div`
  flex: 0 0 35rem;
  height: 24.5rem;
  padding: 0;
  margin: 0.5rem;
  border: 0.2rem solid rgba(170, 170, 170, 0.4);
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  &:hover {
    & > div {
      height: 24.1rem;
      opacity: 1;
      transition: opacity cubic-bezier(0.785, 0.135, 0.15, 0.86) 1s,
        height linear 0.3s;
    }
  }
`

export const PortfolioDescription = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2rem;
  margin: 0;
  opacity: 0;
  height: 0;
  background-color: rgba(91, 97, 106, 0.9);
  transition: all cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.5s;
  font-size: 1.3rem;
  color: #fcf7f8;
`
export const GitButton = styled.a`
  margin: 2rem;
  align-self: center;
  outline: none;
  background-color: #415f8c;
  padding: 0.7rem;
  border: 0.1rem solid #fcf7f8;
  border-radius: 0.5rem;
`
