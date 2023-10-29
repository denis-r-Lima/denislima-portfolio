import Head from "next/head";
import React from "react";

import Header from "../../../components/habit/Header/header";
import SideMenu from "../../../components/habit/Menu/sideMenu";
import Wrapper from "../../../components/habit/Wrapper";
import HabitList from "../../../components/habit/HabitList/habitList";

const Habitracker: React.FC = () => {
  return (
    <Wrapper>
      <>
        <Head>
          <title>Habit Puppy: Track your habits and improve your life!</title>
        </Head>
        <Header />
        <HabitList />
        <SideMenu />
      </>
    </Wrapper>
  );
};

export default Habitracker;
