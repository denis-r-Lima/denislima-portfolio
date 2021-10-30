import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  Container,
  AdminButton,
  SignOutButton,
  BurgerContainer,
  BurgerLine,
} from "./styles";
import { useAuth } from "../../../context/AuthContext";

type SideMenuProps = {
  isHidden: boolean;
  openMenu: () => void;
};

type MenuItemType = {
  url: string;
  label: string;
};

const MENU_ITEMS: MenuItemType[] = [
  {
    url: "/admin/content",
    label: "Page Content",
  },
  {
    url: "/admin/portfolio",
    label: "Portfolio",
  },
  {
    url: "/admin/blog",
    label: "Blog Edit",
  },
];

const SideMenu: React.FC<SideMenuProps> = ({ isHidden, openMenu }) => {
  const router = useRouter();
  const { signOut } = useAuth();
  return (
    <>
      <Container className={isHidden && "Hidden"}>
        {MENU_ITEMS.map((item) => (
          <Link href={item.url} key={item.url}>
            <AdminButton className={router.pathname === item.url && "Current"}>
              {item.label}
            </AdminButton>
          </Link>
        ))}
        <SignOutButton onClick={signOut}>Sign Out</SignOutButton>
      </Container>
      <BurgerContainer onClick={openMenu}>
        <BurgerLine />
        <BurgerLine />
        <BurgerLine />
      </BurgerContainer>
    </>
  );
};

export default SideMenu;
