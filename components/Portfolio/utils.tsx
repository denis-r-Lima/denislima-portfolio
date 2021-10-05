export const PORTFOLIO = [
  {
    img: "/img/projects/ez_converter.PNG",
    description:
      () => `Mobile app made in React Native that access one external 
        API to fetch data to get updated currency exchange rate.`,
    gitHub: "https://github.com/denis-r-Lima/EZC",
  },
  {
    img: "/img/projects/chat_live.PNG",
    description: () =>
      `Live Chat app made in vanila JavaScript, express and Socket.io.`,
    gitHub: "https://github.com/denis-r-Lima/ChatLive",
  },
  {
    img: "/img/projects/portfolio.png",
    description:
      () => `This very same web site, made using React/Next.js, TypeScript and
        Styled-Components.`,
    gitHub: "https://github.com/denis-r-Lima/denislima-portfolio",
  },
  {
    img: "/img/projects/podcastr.png",
    description: () => (
      <>
        A podcast player app, it uses a mongoDB on a docker container to store
        the episodes data.
        <br />
        This project was create using:
        <ul>
          <li>TypeScript</li>
          <li>MongoDB</li>
          <li>Docker</li>
          <li>Styled-components</li>
          <li>Next.js</li>
        </ul>
      </>
    ),
    gitHub: "https://github.com/denis-r-Lima/denislima-portfolio",
  },
];
