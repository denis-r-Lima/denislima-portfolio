import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { useAuth } from "../../context/AuthContext";
import SideMenu from "./SideMenu";

import { Container } from "./styles";
import { useLoading } from "../../context/LoadingContext";
import Loading from "../StyledComponents/Loading";

const AdminWrapper: React.FC = ({ children }) => {
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const { authUser, loading } = useAuth();
  const { loadingData } = useLoading();
  const router = useRouter();

  useEffect(() => {
    setIsHidden(window.innerWidth <= 450);
  }, []);

  useEffect(() => {
    if (!loading && !authUser) router.push("/admin/login");
  }, [authUser, loading]);
  return (
    <>
      <Head>
        <title>My Portfolio Admin Page</title>
        <link rel="icon" href="/img/favico.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </Head>
      {!loading && authUser && (
        <Container>
          <SideMenu
            isHidden={isHidden}
            openMenu={() => setIsHidden((prevState) => !prevState)}
          />
          {children}
        </Container>
      )}
      {(loadingData || loading) && <Loading />}
    </>
  );
};

export default AdminWrapper;
