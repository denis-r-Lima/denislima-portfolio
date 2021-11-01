import Head from "next/head";
import { useEffect, useState } from "react";
import { GetStaticPropsResult } from "next";

import { Container } from "../styles/indexV2/styles";
import { fetchApi } from "../controllers/utils/fetchDatabase";
import TopMenu from "../components/MainPage_V2/Menus/TopMenu";
import SideMenu from "../components/MainPage_V2/Menus/SideMenu";
import Header from "../components/MainPage_V2/Header/Header";

type HomeProps = {
  content: ContentType;
  portfolio: PortfolioItemType[];
};

const HomeV2: React.FC<HomeProps> = ({ content, portfolio }) => {
  const [showSideMenu, setShowSideMenu] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  //   useEffect(() => {
  //     const skillCards = document.querySelectorAll(".Card");
  //     const skillCardsObserver = new IntersectionObserver(
  //       (elements, skillCardsObserver) => {
  //         elements.forEach((element) => {
  //           if (element.isIntersecting) {
  //             if (element.target.classList.contains("front")) {
  //               element.target.classList.remove("front");
  //             }
  //             if (element.target.classList.contains("back")) {
  //               element.target.classList.remove("back");
  //             }

  //             skillCardsObserver.unobserve(element.target);
  //           }
  //         });
  //       },
  //       { threshold: 0.5 }
  //     );

  //     skillCards.forEach((skillCard) => {
  //       skillCardsObserver.observe(skillCard);
  //     });
  //   }, []);

  useEffect(() => {
    if (isMobile) {
      setShowSideMenu(true);
    } else {
      const target = document.getElementById("Header");

      const observer = new IntersectionObserver(
        (elements) => {
          elements.forEach((element) => {
            console.log(element.isIntersecting);
            if (element.isIntersecting) {
              setShowSideMenu(false);
            } else {
              setShowSideMenu(true);
            }
          });
        },
        { threshold: 0.95 }
      );

      observer.observe(target);
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
        <meta
          name="google-site-verification"
          content="WV4fnX-CLbGZIP8tPpDrmRedAMZUO50eHYujRc2-NXk"
        />
      </Head>
      <Container>
        <TopMenu className={(isMobile || showSideMenu) && "hide"} />
        <SideMenu className={showSideMenu && "show"} />
        <Header />
        <div
          style={{ width: "100%", height: "400vh", backgroundColor: "inherit" }}
        ></div>
      </Container>
    </div>
  );
};

export default HomeV2;

export async function getStaticProps(
  _context
): Promise<GetStaticPropsResult<HomeProps>> {
  let content = {} as ContentType;
  let portfolio = [] as PortfolioItemType[];
  try {
    const resultContent = await fetchApi(
      "pageContent",
      process.env.NEXT_PUBLIC_CONTENT_ID
    );
    const resultPortfolio = await fetchApi(
      "portfolioItems",
      process.env.NEXT_PUBLIC_PORTFOLIO_ID
    );
    if (resultContent) {
      content = resultContent.data() as ContentType;
    }
    if (resultPortfolio) {
      const portfolioResponse =
        resultPortfolio.data() as PortfolioFetchResponseType;
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
