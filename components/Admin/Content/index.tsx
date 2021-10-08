import React, { useEffect, useState } from "react";
import {
  collection,
  getFirestore,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";

import app from "../../../controllers/utils/firebase";

import { Container, AboutTextArea, StyledInput, SaveButton } from "./styles";
import { useLoading } from "../../../context/LoadingContext";
import SkillCardContent from "./SkillsContent";

const Content: React.FC = () => {
  const [pageContent, setPageContent] = useState<ContentType>(
    {} as ContentType
  );
  const { setLoadingData } = useLoading();

  const fetchFromStore = async () => {
    const db = getFirestore(app);
    const pageCollection = collection(db, "pageContent");
    try {
      setLoadingData(true);
      const result = await getDocs(pageCollection);
      setPageContent({
        ...result.docs[0].data(),
        id: result.docs[0].id,
      } as ContentType);
      setLoadingData(false);
    } catch (e) {
      console.error(e);
    }
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPageContent((prevState) => ({ ...prevState, [name]: value }));
  };

  const saveContent = async () => {
    const db = getFirestore(app);
    const pageCollection = collection(db, "pageContent");
    try {
      setLoadingData(true);
      await updateDoc(doc(pageCollection, pageContent.id), pageContent);
      setLoadingData(false);
    } catch (e) {
      console.log(e);
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
