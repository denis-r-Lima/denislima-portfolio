import Link from "next/link";
import React from "react";
import StyledInput from "../../components/StyledComponents/StyledInput/StyledInput";
import { useResumeData } from "../../context/ResumeDataContext";
// import { Container } from './styles';

const PersonalInformation: React.FC = () => {
  const { resumeData, changeData } = useResumeData();
  return (
    <div>
      <StyledInput
        required
        onChange={changeData}
        title="First Name"
        name="firstName"
        value={resumeData.firstName}
        backgroundColor="#fff"
        color="#333333"
        colorHover="#333333"
        focusColor="#333333"
      />
      <StyledInput
        required
        onChange={changeData}
        title="Last Name"
        name="lastName"
        value={resumeData.lastName}
        backgroundColor="#fff"
        color="#333333"
        colorHover="#333333"
        focusColor="#333333"
      />
      <StyledInput
        required
        onChange={changeData}
        title="Address"
        name="address"
        value={resumeData.address}
        backgroundColor="#fff"
        color="#333333"
        colorHover="#333333"
        focusColor="#333333"
      />
      <StyledInput
        required
        onChange={changeData}
        title="Contact Phone"
        name="contact"
        value={resumeData.contact}
        backgroundColor="#fff"
        color="#333333"
        colorHover="#333333"
        focusColor="#333333"
      />
      <StyledInput
        required
        onChange={changeData}
        title="E-mail"
        name="email"
        value={resumeData.email}
        backgroundColor="#fff"
        color="#333333"
        colorHover="#333333"
        focusColor="#333333"
      />
      <Link href="pdfEditor/result">
        <button>See result</button>
      </Link>
    </div>
  );
};

export default PersonalInformation;
