import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";
import SideMenu from "./SideMenu";

import { Container } from "./styles";
import { useLoading } from "../../context/LoadingContext";
import Loading from "./Loading";

const AdminWrapper: React.FC = ({ children }) => {
  const { authUser, loading, signOut } = useAuth();
  const { loadingData } = useLoading();
  const router = useRouter();

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
      {loading && <h1>Loading</h1>}
      {!loading && authUser && (
        <Container>
          <SideMenu />
          {children}
        </Container>
      )}
      {loadingData && <Loading />}
    </>
  );
};

export default AdminWrapper;
