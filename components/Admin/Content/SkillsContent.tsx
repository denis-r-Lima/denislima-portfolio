import React, { useState } from "react";
import { MdAddCircleOutline, MdDelete } from "react-icons/md";
import { useTheme } from "styled-components";
import DraggableDiv from "../../StyledComponents/DraggableDiv/DraggableDiv";
import IconButton from "../../StyledComponents/IconButton/IconButton";

import StyledInput from "../../StyledComponents/StyledInput/StyledInput";

import { HalfGrid, InsideDiv, List, ListItem, NumberInput } from "./styles";

type SkillCardContentProps = {
  skill: TechType[];
  title: string;
  onChange: (newValue: TechType[]) => void;
  onDelete: (index: number) => void;
};

const SkillCardContent: React.FC<SkillCardContentProps> = ({
  skill,
  onChange,
  onDelete,
  title,
}) => {
  const theme = useTheme();
  const [newTech, setNewTech] = useState<string>("");
  const [dragIndex, setDragIndex] = useState<number | null>(null);

  const onNewTechChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTech(e.target.value);
  };

  const onAdd = () => {
    if (newTech.length > 0) {
      const updatedTech = [...skill, { name: newTech, value: "0%" }];
      onChange(updatedTech);
      setNewTech("");
    }
  };

  const onDragStart = (index: number) => () => {
    setDragIndex(index);
  };

  const onDrop = (index: number) => () => {
    const newOrder = skill?.filter((_, idx) => idx !== dragIndex);
    const newIndex = index > dragIndex ? index - 1 : index;
    newOrder.splice(newIndex, 0, skill[dragIndex]);
    onChange(newOrder);
    setDragIndex(null);
  };

  const onSkillLevelChange =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValues = skill.map((value, idx) => {
        if (idx === index) return { ...value, value: `${e.target.value}%` };
        return value;
      });

      onChange(newValues);
    };

  return (
    <>
      <h2>{title}</h2>
      <div>
        <HalfGrid>
          <StyledInput
            title="Technology"
            value={newTech}
            onChange={onNewTechChange}
            fullWidth
            backgroundColor={theme.admin.color.base}
            color={theme.admin.color.baseDark}
            colorHover={theme.admin.color.baseDark}
            focusColor={theme.admin.color.baseDark}
          />
          <InsideDiv>
            <IconButton onClick={onAdd}>
              <MdAddCircleOutline />
            </IconButton>
          </InsideDiv>
        </HalfGrid>
        <List>
          {skill?.map((tech, index) => {
            return (
              <ListItem key={tech.name}>
                <DraggableDiv
                  action={onDrop(index)}
                  startDrag={onDragStart(index)}
                >
                  {tech.name}
                  <NumberInput
                    type="number"
                    max="100"
                    min="0"
                    value={Number(tech.value.slice(0, -1))}
                    onChange={onSkillLevelChange(index)}
                  />
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
