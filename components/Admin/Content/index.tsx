import React, { useEffect, useState } from "react";
import { getIdToken, getAuth } from "firebase/auth";

import { Container, SaveButton, HalfGrid } from "./styles";
import { useLoading } from "../../../context/LoadingContext";
import SkillCardContent from "./SkillsContent";
import StyledInput from "../../StyledComponents/StyledInput/StyledInput";

const Content: React.FC = () => {
  const [pageContent, setPageContent] = useState<ContentType>(
    {} as ContentType
  );
  const { setLoadingData } = useLoading();
  const auth = getAuth();

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

  const nestedOnChange =
    (nest: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setPageContent((prevState) => ({
        ...prevState,
        [nest]: { ...prevState[nest], [name]: value },
      }));
    };

  useEffect(() => {
    fetchFromStore();
  }, []);

  const deleteTechnology = (skillType: string) => (index: number) => {
    const newTechnologies = [...pageContent[skillType].technologies];
    setPageContent((prevState) => ({
      ...prevState,
      [skillType]: {
        ...prevState[skillType],
        technologies: newTechnologies.filter((tech, idx) => idx !== index),
      },
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
              />
            </HalfGrid>
          </div>
          <SkillCardContent
            skill={pageContent.frontEnd}
            onChange={nestedOnChange("frontEnd")}
            onDelete={deleteTechnology("frontEnd")}
          />
          <SkillCardContent
            skill={pageContent.backEnd}
            onChange={nestedOnChange("backEnd")}
            onDelete={deleteTechnology("backEnd")}
          />
          <div>
            <SaveButton onClick={saveContent}>Save</SaveButton>
          </div>
        </>
      )}
    </Container>
  );
};

export default Content;
