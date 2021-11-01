import React from "react";

import { Container, BurgerMenuContainer, BurgerLines } from "./SideMenuStyles";
type SideMenu = {
  className: string;
};
const SideMenu: React.FC<SideMenu> = ({ className }) => {
  return (
    <BurgerMenuContainer className={className}>
      <BurgerLines />
      <BurgerLines />
      <BurgerLines />
    </BurgerMenuContainer>
  );
};

export default SideMenu;
