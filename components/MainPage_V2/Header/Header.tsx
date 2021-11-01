import React from "react";
import StyledButton from "../../StyledComponents/StyledButton/StyledButton";

import { Container, ImageContainer, TextContainer } from "./styles";

const Header: React.FC = () => {
  return (
    <Container id="Header">
      <ImageContainer />
      <TextContainer>
        <h1>Hello, I'm Denis Lima.</h1>
        <h1>I'm a full-stack developer.</h1>
        <StyledButton>View my work</StyledButton>
      </TextContainer>
    </Container>
  );
};

export default Header;
