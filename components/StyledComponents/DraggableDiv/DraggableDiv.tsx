import React, { HTMLAttributes } from "react";

import { Draggable } from "./styles";

type CleanDivType = Omit<
  HTMLAttributes<HTMLDivElement>,
  "onDragOver" | "onDragLeave" | "draggable" | "onDragStart" | "onDrop"
>;

interface DraggableDiv extends CleanDivType {
  action: (e: React.DragEvent<HTMLDivElement>) => void;
  startDrag: (e: React.DragEvent<HTMLDivElement>) => void;
}

const DraggableDiv: React.FC<DraggableDiv> = (props) => {
  const { children } = props;
  const cleanProps = { ...props };
  delete cleanProps.action;
  delete cleanProps.startDrag;

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.style.paddingTop = "2rem";
  };

  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.style.paddingTop = "0rem";
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.style.paddingTop = "0rem";
    props.action(e);
  };

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    props.startDrag(e);
  };

  return (
    <Draggable
      draggable
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDragStart={onDragStart}
      {...cleanProps}
    >
      {children}
    </Draggable>
  );
};

export default DraggableDiv;
