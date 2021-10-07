import React, {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  useEffect,
  useState,
} from "react";
import {
  collection,
  getFirestore,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";

import app from "../../../controllers/utils/firebase";

import { Container, AboutTextArea } from "./styles";
import { useLoading } from "../../../context/LoadingContext";

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

  useEffect(() => {
    fetchFromStore();
  }, []);
  return (
    <Container>
      {pageContent && (
        <>
          <label>About Me</label>
          <AboutTextArea
            rows={10}
            value={pageContent.about}
            name="about"
            onChange={onChange}
          />
          <label>Email</label>
          <input value={pageContent.email} name="email" onChange={onChange} />
          <button onClick={saveContent}>Save</button>
        </>
      )}
    </Container>
  );
};

export default Content;
