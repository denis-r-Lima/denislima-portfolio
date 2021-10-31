import React, { useState } from "react";
import { MdAddCircleOutline, MdDelete } from "react-icons/md";
import DraggableDiv from "../../StyledComponents/DraggableDiv/DraggableDiv";
import IconButton from "../../StyledComponents/IconButton/IconButton";

import StyledInput from "../../StyledComponents/StyledInput/StyledInput";

import { HalfGrid, InsideDiv, List, ListItem } from "./styles";

type SkillCardContentProps = {
  skill: DevTypes;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onDelete: (index: number) => void;
};

const SkillCardContent: React.FC<SkillCardContentProps> = ({
  skill,
  onChange,
  onDelete,
}) => {
  const [newTech, setNewTech] = useState<string>("");
  const [dragIndex, setDragIndex] = useState<number | null>(null);

  const onNewTechChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTech(e.target.value);
  };

  const onAdd = () => {
    if (newTech.length > 0) {
      const updatedTech = [...skill.technologies, newTech];
      const e = {
        target: { name: "technologies", value: updatedTech },
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      onChange(e);
      setNewTech("");
    }
  };

  const onDragStart = (index: number) => () => {
    setDragIndex(index);
  };

  const onDrop = (index: number) => () => {
    const newOrder = skill?.technologies.filter((_, idx) => idx !== dragIndex);
    const newIndex = index > dragIndex ? index - 1 : index;
    newOrder.splice(newIndex, 0, skill?.technologies[dragIndex]);
    const e = {
      target: { name: "technologies", value: newOrder },
    } as unknown as React.ChangeEvent<HTMLInputElement>;
    onChange(e);
    setDragIndex(null);
  };

  return (
    <>
      <h2>{skill?.title || ""}</h2>
      <div>
        <StyledInput
          multiLine
          fullWidth
          title="Description"
          name="description"
          value={skill?.description || ""}
          onChange={(e) => onChange(e)}
        />
      </div>
      <div>
        <HalfGrid>
          <StyledInput
            title="Technology"
            value={newTech}
            onChange={onNewTechChange}
            fullWidth
          />
          <InsideDiv>
            <IconButton onClick={onAdd}>
              <MdAddCircleOutline />
            </IconButton>
          </InsideDiv>
        </HalfGrid>
        <List>
          {skill?.technologies.map((tech, index) => {
            return (
              <ListItem key={tech}>
                <DraggableDiv
                  action={onDrop(index)}
                  startDrag={onDragStart(index)}
                >
                  {tech}
                  <IconButton onClick={() => onDelete(index)}>
                    <MdDelete />
                  </IconButton>
                </DraggableDiv>
              </ListItem>
            );
          })}
        </List>
      </div>
    </>
  );
};

export default SkillCardContent;
