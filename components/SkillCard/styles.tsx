import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: -23rem;
  &>div {
    flex: 0 0 35rem;
  }
`

export const Card = styled.div`
  min-height: 50rem;
  position: relative;
  top: -25rem;
  background-color: #fcf7f8;
  padding: 3rem;
  border: 0.2rem solid #bbb;
  border-radius: 1rem;
  margin: 1rem;
  color: #5b616a;
  text-align: center;

  &>h1 {
    font-size: 6rem;
  }
  &>h2 {
    margin-bottom: 3rem;
  }
  &>ul {
    text-align: left;
    padding-left: 5rem;
    list-style-type: square;

    &>li {
      font-weight: bold;
      color: #275DAD;
      padding: 0.2rem;
      &>p{
          color: #5b616a
      }
    }
  }
`
