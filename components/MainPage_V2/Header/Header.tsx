import React, { useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";
import navigateTo from "../../../utils/scroll";
import ShootingStar from "../../../utils/shootingStars";
import StyledButton from "../../StyledComponents/StyledButton/StyledButton";

import {
  Container,
  ImageContainer,
  TextContainer,
  Name,
  HeroCanvas,
} from "./styles";

const Header: React.FC = () => {
  // useEffect(() => {
  //   const canvas = document.querySelector("canvas");
  //   const shootingStartEffect = new ShootingStar(canvas);
  //   shootingStartEffect.defineSize();
  //   shootingStartEffect.start();

  //   window.addEventListener("resize", shootingStartEffect.defineSize);
  //   window.addEventListener("blur", () => shootingStartEffect.setStop(true));
  //   window.addEventListener("focus", () => shootingStartEffect.setStop(false));

  //   return () => {
  //     window.removeEventListener("resize", shootingStartEffect.defineSize);
  //     window.removeEventListener("blur", () =>
  //       shootingStartEffect.setStop(true)
  //     );
  //     window.removeEventListener("focus", () =>
  //       shootingStartEffect.setStop(true)
  //     );
  //   };
  // }, []);
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
