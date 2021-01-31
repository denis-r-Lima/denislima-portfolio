import styled from 'styled-components';

export const HeaderFrame = styled.div`
  @media only screen and (max-width: 450px) {
    flex-direction: column;
    padding: 0;
  }
  width: 100%;
  margin: 0;
  padding: 0 0 0 10rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const ImgFrame = styled.div`
  background-image: url("/img/myself.jpeg");
  background-size: cover;
  margin: 5rem 0 0 0rem;
  padding: 0;
  border: 0.5rem solid #5B616A;
  width: 19rem;
  height: 19rem;
  border-radius: 50%;
  overflow: hidden;
`

export const TextCloud = styled.div`
  @media only screen and (max-width: 450px) {
    background-image: url("/img/cloud_text_reverse.png");
    padding: 4.5rem 1.5rem 2rem 2rem;
    top: -4.5rem;
    left: 0rem;
  }

  background-image: url("/img/cloud_text.png");
  background-size: 100% 100%;
  padding: 1.5rem 1.5rem 5.5rem 2rem;
  height: 17rem;
  width: 34rem;
  display: grid;
  place-items: center;
  position: relative;
  top: -6rem;
  left: -5rem;
  font-size: 1.2rem;
`