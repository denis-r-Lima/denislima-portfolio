import React, { useState } from "react";

import { AboutTextArea, AddButton, StyledInput } from "./styles";

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
    const updatedTech = [...skill.technologies, newTech];
    const e = {
      target: { name: "technologies", value: updatedTech },
    } as unknown as React.ChangeEvent<HTMLInputElement>;
    onChange(e);
    setNewTech("");
  };

  return (
    <>
      <h2>{skill?.title || ""}</h2>
      <div>
        <label>Description</label>
        <AboutTextArea
          name="description"
          value={skill?.description || ""}
          onChange={(e) => onChange(e)}
        />
      </div>
      <div>
        <label>Technologies</label>
        <div>
          <StyledInput value={newTech} onChange={onNewTechChange} />
          <AddButton onClick={onAdd}>+</AddButton>
        </div>
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
