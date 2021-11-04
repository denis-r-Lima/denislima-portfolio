import React from "react";
import degreeToRadian from "../../../../utils/degreesToRadians";

type ColumnsUnitProps = {
  index: number;
  incrementAngle: number;
  skill: string;
  size: number;
  fontSize: number;
  color: string;
};

const ColumnsUnit: React.FC<ColumnsUnitProps> = ({
  incrementAngle,
  index,
  skill,
  size,
  fontSize,
  color,
}) => {
  const angle = 90 + incrementAngle * index;
  const x1 = size + 50;
  const y1 = size + 50;
  const x2 = size - size * Math.cos(degreeToRadian(angle)) + 50;
  const y2 = size - size * Math.sin(degreeToRadian(angle)) + 50;
  return (
    <g>
      <defs>
        <marker
          id={`${index}`}
          markerWidth="15"
          markerHeight="10"
          refX="0"
          refY="0"
          overflow="visible"
          orient="auto"
        >
          <text
            x="0"
            y="0"
            dx={-skill.length * (fontSize / 4)}
            dy="-10"
            transform="rotate(90)"
            fontSize={fontSize}
            stroke={color}
            fill={color}
            strokeWidth="0.5"
          >
            {skill}
          </text>
        </marker>
      </defs>
      <line
        x1={x1}
        x2={x2}
        y1={y1}
        y2={y2}
        stroke={color}
        markerEnd={`url(#${index})`}
      />
    </g>
  );
};

export default React.memo(ColumnsUnit);
