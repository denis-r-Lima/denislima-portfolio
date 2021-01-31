import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { FaAngleUp } from "react-icons/fa"

import HeaderComponent from "../components/HeaderComponent/index"
import TopMenu from "../components/TopMenu"
import AboutMe from "../components/AboutMe"
import Portfolio from "../components/Portfolio"
import Contact from "../components/Contact"
import SkillCard from "../components/SkillCard"
import SideMenu from "../components/SideMenu"
import { Container , BackUp} from "../styles/index/styles"


export default function Home() {
  return (
    <div id="TopPage">
      <Head>
        <title>Hi! I am Denis Lima</title>
        <link rel='icon' href='/img/favico.ico' />
      </Head>
      <Container>
        <HeaderComponent />
        <TopMenu />
        <AboutMe id="AboutMe" />
        <SkillCard />
        <Portfolio id="Portfolio" />
        <Contact id="Contact"/>
        <BackUp><a href="#TopPage"><FaAngleUp color="#FFFFFF" /> </a> </BackUp>
      </Container>
      <SideMenu />
    </div>
  )
}
