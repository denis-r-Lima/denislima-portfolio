import React from "react";
import navigateTo from "../../../utils/scroll";

import { Container, LinkButton } from "./styles";

const TopMenu: React.FC = () => {
  return (
    <Container id="topMenu">
      <LinkButton onClick={() => navigateTo("#AboutMe")}> About Me</LinkButton>
      <LinkButton onClick={() => navigateTo("#Portfolio")}>
        Portfolio
      </LinkButton>
      <LinkButton onClick={() => navigateTo("#Contact")}> Contact</LinkButton>
    </Container>
  );
};

export default TopMenu;
