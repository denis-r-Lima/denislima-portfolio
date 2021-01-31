import styled from "styled-components"

export const Container = styled.div`
  @media only screen and (max-width: 450px) {
    width: 100vw;
    margin: 0;
    border: none;
    position: static;
    border-radius: 0;
  }
  position: absolute;
  top: 2rem;
  left: 3rem;
  right: 3rem;
  margin-bottom: 2rem;
  padding: 3rem 0 0 0;
  overflow: hidden;
  border: 0.15rem dashed #5b616a;
  border-radius: 1rem;
  background-color: #fcf7f8;
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
`
export const BackUp = styled.div`
@media only screen and (max-width: 450px) {
  bottom: 1rem;
  right: 1rem;
  }
  display: grid;
  place-items: center;
  position: fixed;
  bottom: 3rem;
  right: 4rem;
  background-color: #5b616a;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  font-size: 3rem;
  z-index:2;
  padding-top: 0.4rem;
`
