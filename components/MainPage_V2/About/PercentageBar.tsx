import React from "react";

import { BarContainer, BarName, BarExternal, BarInternal } from "./styles";

interface Props {
  name: string;
  percentage: string;
  key?: any;
}

const PercentageBar: React.FC<Props> = ({ name, percentage, key }) => {
  return (
    <BarContainer key={key}>
      <BarName>{name}</BarName>
      <BarExternal width={percentage}>
        <BarInternal width={percentage} />
      </BarExternal>
    </BarContainer>
  );
};

export default PercentageBar;
