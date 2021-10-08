import React from "react";
import ReactMarkdown from "react-markdown";
import { PortfolioCardContainer } from "./styles";

type PortfolioCardProps = {
  item: PortfolioItemType;
  onDelete: () => void;
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, onDelete }) => {
  return (
    <PortfolioCardContainer>
      <div>
        <img src={item.image} width="100%" />
      </div>
      <div>
        <ReactMarkdown children={item.description} />
      </div>
      <div>
        <button onClick={onDelete}>Delete</button>
      </div>
    </PortfolioCardContainer>
  );
};

export default PortfolioCard;
