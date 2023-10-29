import React, { createContext, useContext, useState } from "react";

import data, { petroleumResumeData } from "../pages/pdfEditor/myResumeData";

type ResumeData = {
  firstName: string;
  lastName: string;
  address: string;
  contact: string;
  email: string;
  links: {
    name: string;
    link: string;
  }[];
  skills: {
    name: string;
    level: number;
  }[];
  languages: {
    name: string;
    level: number;
  }[];
  objective: string;
  workHistory: {
    position: string;
    company: string;
    start: string;
    current: boolean;
    end: string;
    location: string;
    description: string;
  }[];
  education: {
    level: string;
    degree: string;
    institution: string;
    location: string;
    start: string;
    end: string;
  }[];
  others: {
    name: string;
    items: {
      name: string;
      description: string;
    }[];
  }[];
};

type ResumeDataContextType = {
  resumeData: ResumeData;
  changeData: (e: { target: { name: string; value: any } }) => void;
};

const ResumeDataContext = createContext<ResumeDataContextType>(
  {} as ResumeDataContextType
);

const ResumeDataProvider: React.FC = ({ children }) => {
  const [resumeData, setResumeData] = useState<ResumeData>(petroleumResumeData);

  const changeData = (e: { target: { name: string; value: any } }) => {
    const { value, name } = e.target;
    setResumeData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <ResumeDataContext.Provider value={{ resumeData, changeData }}>
      {children}
    </ResumeDataContext.Provider>
  );
};

export const useResumeData = () => useContext(ResumeDataContext);

export default ResumeDataProvider;
