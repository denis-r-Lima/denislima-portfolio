import React, { useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";
import navigateTo from "../../../utils/scroll";
import start from "../../../utils/shootingStars";
import StyledButton from "../../StyledComponents/StyledButton/StyledButton";

import {
  Container,
  ImageContainer,
  TextContainer,
  Name,
  HeroCanvas,
} from "./styles";

const Header: React.FC = () => {
  useEffect(() => {
    start();
  }, []);
  return (
    <Container>
      <ImageContainer />
      <HeroCanvas />
      <TextContainer>
        <h1>
          Hello, I'm <Name>Denis Lima</Name>.
        </h1>
        <h1>I'm a full-stack developer.</h1>
        <StyledButton onClick={() => navigateTo("#About")} background>
          View more
          <FaArrowDown />
        </StyledButton>
      </TextContainer>
    </Container>
  );
};

export default Header;
