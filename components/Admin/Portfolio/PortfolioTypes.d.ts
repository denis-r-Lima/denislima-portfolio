type PortfolioItemType = {
  description: string;
  gitHub: string;
  image: string;
};

type PortfolioFetchResponseType = {
  id: string;
  items: PortfolioItemType[];
};
