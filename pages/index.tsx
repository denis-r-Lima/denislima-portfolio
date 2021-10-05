import Head from "next/head";
import { useEffect, useState } from "react";

import HeaderComponent from "../components/HeaderComponent/index";
import TopMenu from "../components/TopMenu";
import AboutMe from "../components/AboutMe";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import SkillCard from "../components/SkillCard";
import SideMenu from "../components/SideMenu";
import { Container } from "../styles/index/styles";

export default function Home() {
  const [showSideMenu, setShowSideMenu] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const skillCards = document.querySelectorAll(".Card");
    const skillCardsObserver = new IntersectionObserver(
      (elements, skillCardsObserver) => {
        elements.forEach((element) => {
          if (element.isIntersecting) {
            if (element.target.classList.contains("front")) {
              element.target.classList.remove("front");
            }
            if (element.target.classList.contains("back")) {
              element.target.classList.remove("back");
            }

            skillCardsObserver.unobserve(element.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    skillCards.forEach((skillCard) => {
      skillCardsObserver.observe(skillCard);
    });
  }, []);

  useEffect(() => {
    if (isMobile) {
      setShowSideMenu(true);
    } else {
      const root = document.getElementById("headerFrame");

      const observer = new IntersectionObserver(
        (elements) => {
          elements.forEach((element) => {
            if (element.isIntersecting) {
              setShowSideMenu(false);
            } else {
              setShowSideMenu(true);
            }
          });
        },
        { rootMargin: "-350px 0px 0px 0px" }
      );

      observer.observe(root);
      return () => observer.disconnect();
    }
  }, [isMobile]);

  useEffect(() => {
    const checkWidth = () => {
      if (window.innerWidth < 450) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkWidth();

    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <div id="TopPage">
      <Head>
        <title>Hi! I am Denis Lima</title>
        <link rel="icon" href="/img/favico.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container>
        {!showSideMenu && <TopMenu />}
        <HeaderComponent />
        <AboutMe id="AboutMe" />
        <SkillCard />
        <Portfolio id="Portfolio" />
        <Contact id="Contact" />
        {showSideMenu && <SideMenu />}
      </Container>
    </div>
  );
}
