import Head from "next/head"
import { useEffect } from "react"
// import Link from "next/link"
// import Image from "next/image"
import { FaAngleUp } from "react-icons/fa"

import HeaderComponent from "../components/HeaderComponent/index"
import TopMenu from "../components/TopMenu"
import AboutMe from "../components/AboutMe"
import Portfolio from "../components/Portfolio"
import Contact from "../components/Contact"
import SkillCard from "../components/SkillCard"
import SideMenu from "../components/SideMenu"
import { Container , BackUp} from "../styles/index/styles"
import navigateTo from "../controllers/utils/scroll"


export default function Home() {

  useEffect(()=>{

    const skillCards = document.querySelectorAll(".Card")



    const skillCardsObserver = new IntersectionObserver((elements, skillCardsObserver) => {
      elements.forEach(element => {
        if(element.isIntersecting){
            if(element.target.classList.contains("front")){
              element.target.classList.remove("front")
            }
            if(element.target.classList.contains("back")){
              element.target.classList.remove("back")
            }
         
          skillCardsObserver.unobserve(element.target)
        }
      })
    }, {threshold: 0.5})

    skillCards.forEach(skillCard =>{
      skillCardsObserver.observe(skillCard)
    })
  })

  return (
    <div id="TopPage">
      <Head>
        <title>Hi! I am Denis Lima</title>
        <link rel='icon' href='/img/favico.ico' />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Head>
        <Container>
          <HeaderComponent />
          <TopMenu />
          <AboutMe id="AboutMe" />
          <SkillCard />
          <Portfolio id="Portfolio" />
          <Contact id="Contact"/>
          <BackUp><a href="#TopPage" onClick={(e) => navigateTo(e)}><FaAngleUp color="#fcf7f8" /></a></BackUp>
        </Container>
        <SideMenu />
    </div>
  )
}
