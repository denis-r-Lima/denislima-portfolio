import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Container, AdminButton, SignOutButton } from "./styles";
import { useAuth } from "../../../context/AuthContext";

type SideMenuProps = {
  isHidden: boolean;
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
];

const SideMenu: React.FC<SideMenuProps> = ({ isHidden }) => {
  const router = useRouter();
  const { signOut } = useAuth();
  return (
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
  );
};

export default SideMenu;
