import styled from "styled-components"

export const Container = styled.div`
  @media only screen and (max-width: 450px) {
    width: 100vw;
    margin: 0;
    border: none;
  }

  width: calc(100vw - 6rem);
  padding: 3rem 5rem;
  margin: 2rem 3rem;
  border: 0.15rem dashed #909090;
  border-radius: 1rem;
  background-color: #fbfbfb;
  display: flex;
  flex-direction: column;
`

export const HeaderFrame = styled.div`
  @media only screen and (max-width: 450px) {
    flex-direction: column;
  }
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const ImgFrame = styled.div`
  margin: 5rem 0 0 0;
  padding: 0;
  border: 0.4rem solid #333;
  width: 19rem;
  height: 19rem;
  border-radius: 50%;
  overflow: hidden;
`

export const TextCloud = styled.div`
  @media only screen and (max-width: 450px) {
    background-image: url("/img/cloud_text_reverse.png");
    padding: 5.5rem 1.5rem 1.5rem 2rem;
    top: -4.5rem;
    left: 0rem;
  }

  background-image: url("/img/cloud_text.png");
  background-size: cover;
  padding: 1.5rem 1.5rem 5.5rem 2rem;
  height: 17rem;
  width: 34rem;
  display: grid;
  place-items: center;
  position: relative;
  top: -6rem;
  left: 2rem;
  font-size: 1.2rem;
`
