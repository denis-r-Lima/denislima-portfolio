import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${(props) => props.theme.pallet.color.background};
  font-size: 3rem;
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("./img/208124.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: grayscale(1) sepia(0.6);
`;
