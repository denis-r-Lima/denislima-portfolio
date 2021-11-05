import React, { useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";
import useCanvas, {
  animate,
  getRandomInt,
  Star,
} from "../../../utils/hooks/useCanvas";
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
  // const c = useCanvas();
  useEffect(() => {
    // const ctx = c.current?.getContext("2d");
    // const maxX = window.innerWidth;
    // const maxY = window.innerHeight * 0.4;
    // const maxRadius = 2;
    // const stars = [];
    // for (let i = 0; i < 8; i++) {
    //   stars.push(
    //     new Star(
    //       getRandomInt(maxX, 100),
    //       getRandomInt(maxY, 100),
    //       ctx,
    //       getRandomInt(maxRadius, 2),
    //       getRandomInt(10, 8),
    //       getRandomInt(5000, 1000)
    //     )
    //   );
    // }
    // animate(ctx, stars)();
    start();
  });
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
