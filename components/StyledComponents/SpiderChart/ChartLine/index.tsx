import React from "react";
import degreeToRadian from "../../../../utils/degreesToRadians";

type ChartLineProps = {
  data?: {
    [key: string]: { [key: string]: number };
  };
  dataKey: string;
  maxValue?: number;
  size?: number;
  color?: string;
  skills?: string[];
  incrementAngle?: number;
  toolTip?: boolean;
  _type?: string;
};

const ChartLine: React.FC<ChartLineProps> = ({
  data = {},
  dataKey,
  maxValue = 10,
  color = "#46B2A2",
  size = 400,
  skills = [],
  incrementAngle = 0,
  toolTip = false,
}) => {
  if (!data[dataKey]) return <></>;

  const onMouseOver = (index: number) => {
    const div = document.getElementById(`${dataKey}${index}`) as HTMLDivElement;
    div.style.display = "block";
  };

  const onMouseOut = (index: number) => {
    const div = document.getElementById(`${dataKey}${index}`) as HTMLDivElement;
    div.style.display = "none";
  };

  const localData = data[dataKey];
  const chartSize = size / 2 - 50;
  const heightPoint = chartSize / maxValue;
  let points = "";
  const markers = skills.map((skill, index) => {
    const angle = 90 + incrementAngle * index;
    const realPoint = !localData[skill]
      ? 0
      : localData[skill] > maxValue
      ? maxValue
      : localData[skill] < 0
      ? 0
      : localData[skill];
    const x =
      chartSize -
      heightPoint * realPoint * Math.cos(degreeToRadian(angle)) +
      50;
    const y =
      chartSize -
      heightPoint * realPoint * Math.sin(degreeToRadian(angle)) +
      50;
    points += `${x},${y} `;
    const textWidth = `${dataKey} - ${skill}: ${localData[skill]}`.length * 7;
    return (
      <g key={`${skill}-${index}`}>
        <circle
          cx={x}
          cy={y}
          r="5"
          fill={color}
          onMouseOver={toolTip ? () => onMouseOver(index) : () => {}}
          onMouseOut={toolTip ? () => onMouseOut(index) : () => {}}
          pointerEvents="auto"
        />
        {toolTip && (
          <foreignObject
            width={textWidth}
            height="25"
            x="0"
            y="0"
            style={{ zIndex: 999 }}
          >
            <div
              style={{
                backgroundColor: "transparent",
                fontSize: 14,
                display: "none",
              }}
              id={`${dataKey}${index}`}
            >
              {`${dataKey} - ${skill}: ${localData[skill]}`}
            </div>
          </foreignObject>
        )}
      </g>
    );
  });
  return (
    <g>
      <polygon
        points={points}
        stroke={color}
        fill={color}
        strokeWidth="3"
        fillOpacity="0.5"
      />
      {markers}
    </g>
  );
};

export default ChartLine;
