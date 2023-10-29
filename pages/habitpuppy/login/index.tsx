import React from "react";
import Head from "next/head";
import LoginPage from "../../../components/Login";

const Login: React.FC = () => {
  return (
    <>
      <Head>
        <title>My Portfolio Admin Page - Login</title>
        <link rel="icon" href="/img/favico.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </Head>
      <LoginPage target="/admin" />
    </>
  );
};

export default Login;
