import Head from "next/head";
import React from "react";

import Header from "../../../components/habit/Header/header";
import SideMenu from "../../../components/habit/Menu/sideMenu";
import Wrapper from "../../../components/habit/Wrapper";
import AddHabit from "../../../components/habit/EditHabit/editHabit";

const Habitracker: React.FC = () => {
  return (
    <Wrapper>
      <>
        <Head>
          <title>Habit Puppy: Track your habits and improve your life!</title>
        </Head>
        <Header />
        <AddHabit />
        <SideMenu />
      </>
    </Wrapper>
  );
};

export default Habitracker;
