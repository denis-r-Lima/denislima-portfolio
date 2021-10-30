import React, { useState } from "react";
import StyledInput from "../../StyledComponents/StyledInput/StyledInput";

import { AddButton, HalfGrid } from "./styles";

type SkillCardContentProps = {
  skill: DevTypes;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const SkillCardContent: React.FC<SkillCardContentProps> = ({
  skill,
  onChange,
}) => {
  const [newTech, setNewTech] = useState<string>("");

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
            title="Technologies"
            value={newTech}
            onChange={onNewTechChange}
          />
          <div>
            <AddButton onClick={onAdd}>+</AddButton>
          </div>
        </HalfGrid>
        <ul>
          {skill?.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SkillCardContent;
