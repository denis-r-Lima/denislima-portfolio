import styled from "styled-components"

export const Container = styled.nav`
  @media only screen and (max-width: 450px) {
    display: none;
  }


  &>a{
    &:hover {
    color: #275DAD;
    border: solid #275DAD;
    border-left: 2px;
    border-right: 2px;
  }
  margin: 0;
  padding: 0.5rem 2rem;
  font-weight: bold;
  font-size: 1.8rem;
  color: #5b616a;
  cursor: pointer;
  }
  position: fixed;
  top:0;
  background-color: #fcf7f8;
  width: 100%;
  max-width: 1420px;
  height: 3.5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0;
  z-index: 5;
`

