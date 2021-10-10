import React, { useState } from "react";
import navigateTo from "../../../controllers/utils/scroll";

import { Container, Menu, MenuCall, BurgerMenu, MenuButton } from "./styles";

const SideMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const OpenCloseMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const LinkClick = (target: string) => {
    OpenCloseMenu();
    navigateTo(target);
  };

  const ClickOutMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpen((prevState) => !prevState);
    }
  };

  return (
    <>
      <Container className={!isOpen && "Hidden"} onClick={ClickOutMenu}>
        <Menu id="Menu">
          <ul>
            <MenuButton onClick={() => LinkClick("#AboutMe")}>
              About Me
            </MenuButton>
            <MenuButton onClick={() => LinkClick("#Portfolio")}>
              Portfolio
            </MenuButton>
            <MenuButton onClick={() => LinkClick("#Contact")}>
              Contact Me
            </MenuButton>
          </ul>
        </Menu>
      </Container>
      <MenuCall className={isOpen && "Selected"} onClick={OpenCloseMenu}>
        <BurgerMenu id="Top" />
        <BurgerMenu id="Middle" />
        <BurgerMenu id="Bottom" />
      </MenuCall>
    </>
  );
};

export default SideMenu;
