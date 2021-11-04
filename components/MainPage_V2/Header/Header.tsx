import React from "react";
import { FaArrowDown } from "react-icons/fa";
import navigateTo from "../../../utils/scroll";
import StyledButton from "../../StyledComponents/StyledButton/StyledButton";

import { Container, ImageContainer, TextContainer, Name } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <ImageContainer />
      <TextContainer>
        <h1>
          Hello, I'm <Name>Denis Lima</Name>.
        </h1>
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
