import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

import { PortfolioCardContainer } from "./styles";
import IconButton from "../../StyledComponents/IconButton/IconButton";

type PortfolioCardProps = {
  item: PortfolioItemType;
  onDelete: () => void;
  selectEdit: () => void;
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  item,
  onDelete,
  selectEdit,
}) => {
  return (
    <PortfolioCardContainer>
      <div>
        <Image src={item.image} width="300" height="200" />
      </div>
      <div>
        <ReactMarkdown children={item.description} />
      </div>
      <div>
        <IconButton onClick={onDelete}>
          <FiTrash2 />
        </IconButton>
        <IconButton onClick={selectEdit}>
          <FiEdit2 />
        </IconButton>
      </div>
    </PortfolioCardContainer>
  );
};

export default PortfolioCard;
