import React from "react";
import degreeToRadian from "../../../../utils/degreesToRadians";

type LevelsProps = {
  size: number;
  steps: number;
  index: number;
  incrementAngle: number;
  color: string;
};

const LevelUnit: React.FC<LevelsProps> = ({
  size,
  steps,
  index,
  incrementAngle,
  color,
}) => {
  const levels = new Array(steps).fill(0);
  const angle = 90 + incrementAngle * index;
  const nextAngle = 90 + incrementAngle * (index + 1);
  return (
    <>
      {levels.map((_, idx) => {
        const levelHeight = size - (size / steps) * idx;
        const x1 = size - levelHeight * Math.cos(degreeToRadian(angle)) + 50;
        const y1 = size - levelHeight * Math.sin(degreeToRadian(angle)) + 50;
        const x2 =
          size - levelHeight * Math.cos(degreeToRadian(nextAngle)) + 50;
        const y2 =
          size - levelHeight * Math.sin(degreeToRadian(nextAngle)) + 50;
        return (
          <line
            x1={x1}
            x2={x2}
            y1={y1}
            y2={y2}
            stroke={color}
            strokeDasharray="4"
            key={`levels${index}-${idx}`}
          />
        );
      })}
    </>
  );
};

export default React.memo(LevelUnit);
