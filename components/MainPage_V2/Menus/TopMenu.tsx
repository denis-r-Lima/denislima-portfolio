import React from "react";

import { Container } from "./TopMenusStyles";

type TopMenu = {
  className?: string;
};

const TopMenu: React.FC<TopMenu> = ({ className }) => {
  return (
    <Container className={className} id="TopMenu">
      Test color
    </Container>
  );
};

export default TopMenu;
