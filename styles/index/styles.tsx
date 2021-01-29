import styled from "styled-components"

export const Container = styled.div`
  width: calc(100vw - 6rem);
  padding: 3rem 5rem;
  margin: 2rem 3rem;
  border: 0.15rem dashed #909090;
  border-radius: 1rem;
  background-color: #fbfbf3;
  display: flex;
  flex-direction: column;
`

export const HeaderFrame = styled.div`
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
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  overflow: hidden;
`

export const TextCloud = styled.div ` 
    background-image: url("/pixel-speech-bubble-favicon.png");
    background-size: cover;
    padding: 1.5rem 1.5rem 5.5rem 2rem;
    height: 17rem;
    width: 34rem;
    display: grid;
    place-items: center;
    position: relative;
    top: -6rem;
    left: 2rem;
    font-size: 1.5rem;
`
