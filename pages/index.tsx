import Head from "next/head";
import { useEffect, useState } from "react";
import { GetStaticPropsResult } from "next";

import { Container } from "../styles/indexV2/styles";
import TopMenu from "../components/MainPage_V2/Menus/TopMenu";
import SideMenu from "../components/MainPage_V2/Menus/SideMenu";
import Header from "../components/MainPage_V2/Header/Header";
import About from "../components/MainPage_V2/About/About";
import Contact from "../components/MainPage_V2/Contact/Contact";
import Portfolio from "../components/MainPage_V2/Portfolio/Portfolio";
import { IntersectionObserverRegister } from "../utils/IntersectionObserver";
import SnackBar from "../components/StyledComponents/SnackBar/SnackBar";
import useAlert from "../utils/hooks/setAlert";
import connectFirebaseAdmin from "../utils/firebaseAdmin";

type HomeProps = {
  content: ContentType;
  portfolio: PortfolioItemType[];
};

const HomeV2: React.FC<HomeProps> = ({ content, portfolio }) => {
  const [showSideMenu, setShowSideMenu] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [message, color, setAlert] = useAlert();

  useEffect(() => {
    const callBack = (
      element: IntersectionObserverEntry,
      observer: IntersectionObserver
    ) => {
      if (element.isIntersecting) {
        element.target.classList.add("show");
        observer.unobserve(element.target);
      }
    };
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.3,
      rootMargin: "0px 0px -15% 0px",
    };
    const targets = [".title", ".card", ".project", ".email", "#Cards"];
    const observer = IntersectionObserverRegister(
      targets,
      callBack,
      observerOptions
    );

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      setShowSideMenu(true);
    } else {
      const callBack = (element: IntersectionObserverEntry) => {
        if (element.isIntersecting) {
          setShowSideMenu(false);
        } else {
          setShowSideMenu(true);
        }
      };
      const topMenuObserver = IntersectionObserverRegister(
        ["#Header"],
        callBack,
        { threshold: 0.95 }
      );

      return () => topMenuObserver.disconnect();
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

  useEffect(() => {
    fetch("/api/visitors", {
      method: "PUT",
    });
  }, []);

  return (
    <div id="Home">
      <Head>
        <title>Hi! I am Denis Lima</title>
        <link rel="icon" href="/img/favico.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&family=Roboto:wght@300;400;700;900&display=swap"
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
        <section id="Header">
          <Header />
        </section>
        <section id="About">
          <About content={content} />
        </section>
        <section id="Portfolio">
          <Portfolio portfolio={portfolio} />
        </section>
        <section id="Contact">
          <Contact email={content?.email} setAlert={setAlert} />
        </section>
      </Container>
      <SnackBar message={message} color={color} />
    </div>
  );
};

export default HomeV2;

export async function getStaticProps(
  _context
): Promise<GetStaticPropsResult<HomeProps>> {
  const admin = connectFirebaseAdmin();

  let content = {} as ContentType;
  let portfolio = [] as PortfolioItemType[];
  try {
    const db = admin.firestore();
    const contentCollection = db
      .collection("pageContent")
      .doc(process.env.NEXT_PUBLIC_CONTENT_ID)
      .get();
    const portfolioCollection = db
      .collection("portfolioItems")
      .doc(process.env.NEXT_PUBLIC_PORTFOLIO_ID)
      .get();
    const [resultContent, resultPortfolio] = await Promise.all([
      contentCollection,
      portfolioCollection,
    ]);
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
