import styled from "styled-components"

export const Container = styled.nav`
  @media only screen and (max-width: 450px) {
    display: none;
  }

  & > ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
  
  border-bottom: 2px dashed rgba(91, 97, 106, 0.4);
  border-top: 2px dashed rgba(91, 97, 106, 0.4);
  /* margin: 1.5rem 0 0 0; */
  width: 100%;
  height: 3.5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0;
`
export const ButtonItem = styled.li`
  &:hover {
    color: #275DAD;
    border: solid #275DAD;
    border-left: 2px;
    border-right: 2px;
  }
  margin: 0;
  padding: 0.5rem 0.8rem;
  font-weight: bold;
  font-size: 1.8rem;
  color: #5b616a;
  cursor: pointer;
`
