import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 30%;
  left: 10%;
  max-width: 1600px;
  color: ${(props) => props.theme.pallet.color.background};
  font-size: 4rem;
  flex-direction: column;
  display: flex;
  font-family: ${(props) => props.theme.typography.fontFamilyTitle};
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

export const Name = styled.span`
  color: ${(props) => props.theme.pallet.color.baseMedium};
`;

export const HeroCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60%;
  background-color: transparent;
`;
