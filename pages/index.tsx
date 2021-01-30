import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { FaAngleUp } from "react-icons/fa"

import HeaderComponent from "../components/HeaderComponent/index"
import TopMenu from "../components/TopMenu"
import AboutMe from "../components/AboutMe"
import SideMenu from "../components/SideMenu"
import { Container , BackUp} from "../styles/index/styles"


export default function Home() {
  return (
    <div>
      <Head>
        <title>Hi! I am Denis Lima</title>
        <link rel='icon' href='/img/me_60px.ico' />
      </Head>
      <Container>
        <HeaderComponent />
        <TopMenu />
        <AboutMe id="AboutMe" />
        <Link href='/converter'>
          <a>Refresh the right way</a>
        </Link>
        <BackUp><a href="#TopPage"><FaAngleUp color="#FFFFFF" /> </a> </BackUp>
      </Container>
      <SideMenu />
    </div>
  )
}
