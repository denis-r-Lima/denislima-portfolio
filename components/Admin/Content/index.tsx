import React, { useEffect, useState } from "react";
import {
  collection,
  getFirestore,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";

import app from "../../../controllers/utils/firebase";

import {
  Container,
  AboutTextArea,
  StyledInput,
  SaveButton,
  AddButton,
} from "./styles";
import { useLoading } from "../../../context/LoadingContext";
import SkillCardContent from "./SkillsContent";
import { fetchApi, updateData } from "../../../controllers/utils/fetchDatabase";

const Content: React.FC = () => {
  const [pageContent, setPageContent] = useState<ContentType>(
    {} as ContentType
  );
  const { setLoadingData } = useLoading();

  const fetchFromStore = async () => {
    try {
      setLoadingData(true);
      const result = await fetchApi("pageContent");
      setPageContent({
        ...result.docs[0].data(),
        id: result.docs[0].id,
      } as ContentType);
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
    try {
      setLoadingData(true);
      await updateData("pageContent", pageContent);
    } catch (e) {
      console.log(e);
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

  return (
    <Container>
      {pageContent && (
        <>
          <div>
            <label>About Me</label>
            <AboutTextArea
              rows={15}
              value={pageContent.about || ""}
              name="about"
              onChange={onChange}
            />
          </div>
          <div>
            <label>Email</label>
            <StyledInput
              value={pageContent.email || ""}
              name="email"
              onChange={onChange}
            />
          </div>
          <SkillCardContent
            skill={pageContent.frontEnd}
            onChange={nestedOnChange("frontEnd")}
          />
          <SkillCardContent
            skill={pageContent.backEnd}
            onChange={nestedOnChange("backEnd")}
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
