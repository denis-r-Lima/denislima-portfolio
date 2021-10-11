import Head from "next/head";
import { useEffect, useState } from "react";

import AboutMe from "../components/MainPage/AboutMe";
import Contact from "../components/MainPage/Contact";
import HeaderComponent from "../components/MainPage/HeaderComponent/index";
import Portfolio from "../components/MainPage/Portfolio";
import SkillCard from "../components/MainPage/SkillCard";
import SideMenu from "../components/MainPage/SideMenu";
import TopMenu from "../components/MainPage/TopMenu";

import { Container } from "../styles/index/styles";
import { GetStaticPropsResult } from "next";
import { fetchApi } from "../controllers/utils/fetchDatabase";

type HomeProps = {
  content: ContentType;
  portfolio: PortfolioItemType[];
};

const Home: React.FC<HomeProps> = ({ content, portfolio }) => {
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
        <AboutMe id="AboutMe" content={content?.about} />
        <SkillCard content={content} />
        <Portfolio id="Portfolio" portfolio={portfolio} />
        <Contact id="Contact" email={content?.email} />
        {showSideMenu && <SideMenu />}
      </Container>
    </div>
  );
};

export default Home;

export async function getStaticProps(
  _context
): Promise<GetStaticPropsResult<HomeProps>> {
  let content = {} as ContentType;
  let portfolio = [] as PortfolioItemType[];
  try {
    const resultContent = await fetchApi("pageContent");
    const resultPortfolio = await fetchApi("portfolioItems");
    if (resultContent.docs) {
      content = resultContent.docs[0].data() as ContentType;
      delete content.id;
    }
    if (resultPortfolio.docs) {
      const portfolioResponse =
        resultPortfolio.docs[0].data() as PortfolioFetchResponseType;
      portfolio = portfolioResponse?.items;
    }
  } catch (e) {
    console.log(e);
  }
  return {
    props: { content, portfolio },
    revalidate: 24 * 60 * 60, // Every 24h
  };
}
