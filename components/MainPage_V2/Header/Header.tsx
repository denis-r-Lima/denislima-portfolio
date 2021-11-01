import React from "react";
import { FaArrowDown } from "react-icons/fa";
import navigateTo from "../../../controllers/utils/scroll";
import StyledButton from "../../StyledComponents/StyledButton/StyledButton";

import { Container, ImageContainer, TextContainer } from "./styles";

const Header: React.FC = () => {
  return (
    <Container id="Header">
      <ImageContainer />
      <TextContainer>
        <h1>Hello, I'm Denis Lima.</h1>
        <h1>I'm a full-stack developer.</h1>
        <StyledButton onClick={() => navigateTo("#About")}>
          View my work
          <FaArrowDown />
        </StyledButton>
      </TextContainer>
    </Container>
  );
};

export default Header;
