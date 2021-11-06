import React from "react";

import {
  BarContainer,
  BarName,
  BarExternal,
  BarInternal,
} from "./PercentageBarStyle";

interface Props {
  name: string;
  percentage: string;
}

const PercentageBar: React.FC<Props> = ({ name, percentage }) => {
  return (
    <BarContainer>
      <BarName>{name}</BarName>
      <BarExternal width={percentage}>
        <BarInternal width={percentage} />
      </BarExternal>
    </BarContainer>
  );
};

export default PercentageBar;
