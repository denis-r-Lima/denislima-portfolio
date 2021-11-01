import React from "react";
import navigateTo from "../../../controllers/utils/scroll";

import { MenuItems } from "./MenuConstants";
import { Container, MenuButton } from "./TopMenusStyles";

type TopMenu = {
  className?: string;
};

const TopMenu: React.FC<TopMenu> = ({ className }) => {
  return (
    <Container className={className} id="TopMenu">
      {MenuItems.map((item) => (
        <MenuButton key={item.url} onClick={() => navigateTo(item.url)}>
          {item.label}
        </MenuButton>
      ))}
    </Container>
  );
};

export default TopMenu;
