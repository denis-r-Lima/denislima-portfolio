import React, { useEffect, useState } from "react";
import { getIdToken, getAuth } from "firebase/auth";

import { Container, SaveButton, HalfGrid } from "./styles";
import { useLoading } from "../../../context/LoadingContext";
import SkillCardContent from "./SkillsContent";
import StyledInput from "../../StyledComponents/StyledInput/StyledInput";
import { useTheme } from "styled-components";
import StyledButton from "../../StyledComponents/StyledButton/StyledButton";

const Content: React.FC = () => {
  const [pageContent, setPageContent] = useState<ContentType>(
    {} as ContentType
  );
  const { setLoadingData } = useLoading();
  const auth = getAuth();
  const theme = useTheme();

  const fetchFromStore = async () => {
    try {
      setLoadingData(true);
      const result = await fetch("/api/content_handler");
      if (result.status !== 200) throw new Error();
      const data = await result.json();
      setPageContent(data as ContentType);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingData(false);
    }
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPageContent((prevState) => ({ ...prevState, [name]: value }));
  };

  const saveContent = async () => {
    const token = await getIdToken(auth.currentUser);
    try {
      setLoadingData(true);
      await fetch("/api/content_handler", {
        method: "PUT",
        body: JSON.stringify({ data: pageContent, token }),
      });
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingData(false);
    }
  };

  const skillsOnChange =
    (nest: "backEndTech" | "frontEndTech") => (newValue: TechType[]) => {
      setPageContent((prevState) => ({
        ...prevState,
        [nest]: newValue,
      }));
    };

  useEffect(() => {
    fetchFromStore();
  }, []);

  const deleteSkill =
    (skillType: "backEndTech" | "frontEndTech") => (index: number) => {
      const newTechnologies = pageContent[skillType].filter(
        (_t, idx) => idx !== index
      );
      setPageContent((prevState) => ({
        ...prevState,
        [skillType]: newTechnologies,
      }));
    };

  return (
    <Container>
      {pageContent && (
        <>
          <div>
            <StyledInput
              multiLine
              rows={15}
              value={pageContent.about || ""}
              name="about"
              title="About Me"
              onChange={onChange}
              fullWidth
              backgroundColor={theme.admin.color.base}
              color={theme.admin.color.baseDark}
              colorHover={theme.admin.color.baseDark}
              focusColor={theme.admin.color.baseDark}
            />
          </div>
          <div>
            <HalfGrid>
              <StyledInput
                value={pageContent.email || ""}
                name="email"
                title="Email"
                onChange={onChange}
                fullWidth
                backgroundColor={theme.admin.color.base}
                color={theme.admin.color.baseDark}
                colorHover={theme.admin.color.baseDark}
                focusColor={theme.admin.color.baseDark}
              />
            </HalfGrid>
          </div>
          <SkillCardContent
            skill={pageContent.frontEndTech}
            onChange={skillsOnChange("frontEndTech")}
            onDelete={deleteSkill("frontEndTech")}
            title="Front-end"
          />
          <SkillCardContent
            skill={pageContent.backEndTech}
            onChange={skillsOnChange("backEndTech")}
            onDelete={deleteSkill("backEndTech")}
            title="Back-end"
          />
          <div>
            <StyledButton
              onClick={saveContent}
              color={theme.admin.color.baseDark}
              backgroundColor={theme.admin.color.primaryVeryLight}
            >
              Save
            </StyledButton>
          </div>
        </>
      )}
    </Container>
  );
};

export default Content;
