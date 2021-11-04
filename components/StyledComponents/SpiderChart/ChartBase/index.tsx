import React, { useState } from "react";
import ColumnsUnit from "./ColumnsUnit";
import LevelUnit from "./LevelUnit";

type ChartBaseProps = {
  data: {
    [key: string]: { [key: string]: number };
  };
  size: number;
  fontSize: number;
  steps: number;
  maxValue?: number;
  color?: string;
  toolTip?: boolean;
};

const ChartBase: React.FC<ChartBaseProps> = ({
  fontSize = 16,
  size = 400,
  data,
  steps = 5,
  maxValue = 10,
  color = "#484848",
  children,
  toolTip = false,
}) => {
  const dataElement = Object.keys(data);
  const skills = Object.keys(data[dataElement[0]]);
  const incrementAngle = 360 / skills.length;
  const chartSize = size / 2 - 50;
  const legendName: string[] = [];
  const legendColor: string[] = [];

  const [hideList, setHideList] = useState<number[]>([]);

  const childrenWithProps = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      if (child.props.dataKey) {
        legendColor.push(child.props.color ? child.props.color : "#46B2A2");
        legendName.push(child.props.dataKey);
      }
      if (hideList.includes(index)) return;
      return React.cloneElement(child, {
        size,
        data,
        maxValue,
        skills,
        incrementAngle,
        toolTip,
      });
    }
    return child;
  });

  const showHideLine = (index: number) => () => {
    if (hideList.includes(index)) {
      return setHideList((prevState) =>
        prevState.filter((value) => value !== index)
      );
    }
    return setHideList((prevState) => [...prevState, index]);
  };

  return (
    <div style={{ width: size, position: "relative" }}>
      <svg height={size} width={size} pointerEvents="none">
        {skills.map((skill, index) => (
          <g key={skill}>
            <ColumnsUnit
              skill={skill}
              index={index}
              incrementAngle={incrementAngle}
              size={chartSize}
              fontSize={fontSize}
              key={`${skill} - ${index}`}
              color={color}
            />
            <LevelUnit
              incrementAngle={incrementAngle}
              size={chartSize}
              index={index}
              steps={steps}
              color={color}
            />
          </g>
        ))}
        {childrenWithProps}
      </svg>
    </div>
  );
};

export default ChartBase;
