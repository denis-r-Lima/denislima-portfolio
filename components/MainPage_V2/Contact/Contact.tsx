import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

import { useTheme } from "styled-components";
import { useLoading } from "../../../context/LoadingContext";
import Loading from "../../StyledComponents/Loading";
import StyledButton from "../../StyledComponents/StyledButton/StyledButton";
import StyledInput from "../../StyledComponents/StyledInput/StyledInput";
import { ButtonContainer, Title } from "./styles";

import { Container, FromContainer, InnerContainer, NormalText } from "./styles";

interface Props {
  email: string;
  setAlert: (message: string, type: "error" | "success") => void;
}

const EMAIL_DEFAULT_VALUES = {
  name: "",
  email: "",
  message: "",
};

const Contact: React.FC<Props> = ({ email, setAlert }) => {
  const theme = useTheme();
  const { loadingData, setLoadingData } = useLoading();
  const [emailSend, setEmailSend] = useState(EMAIL_DEFAULT_VALUES);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setEmailSend((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoadingData(true);
      const res = await fetch("/api/send_email", {
        method: "POST",
        body: JSON.stringify(emailSend),
      });
      if (res.status === 200) {
        setEmailSend(EMAIL_DEFAULT_VALUES);
        setAlert("Email successfully sent", "success");
      } else {
        throw new Error();
      }
    } catch (error) {
      setAlert("Email not sent", "error");
    } finally {
      setLoadingData(false);
    }
  };
  return (
    <Container>
      <InnerContainer>
        <Title className="title">Contact</Title>
        <FromContainer onSubmit={onSubmit} className="email">
          <NormalText>Have a question or want to work together?</NormalText>
          <div>
            <StyledInput
              title="Name"
              name="name"
              value={emailSend.name}
              onChange={handleChange}
              backgroundColor={theme.pallet.color.backgroundSecondary}
              color={theme.pallet.color.background}
              colorHover={theme.pallet.color.background}
              focusColor={theme.pallet.color.background}
              required
            />
          </div>
          <div>
            <StyledInput
              required
              title="Email"
              name="email"
              value={emailSend.email}
              onChange={handleChange}
              type="email"
              backgroundColor={theme.pallet.color.backgroundSecondary}
              color={theme.pallet.color.background}
              colorHover={theme.pallet.color.background}
              focusColor={theme.pallet.color.background}
            />
          </div>
          <div>
            <StyledInput
              required
              title="Message"
              name="message"
              value={emailSend.message}
              onChange={handleChange}
              multiLine
              rows={8}
              backgroundColor={theme.pallet.color.backgroundSecondary}
              color={theme.pallet.color.background}
              colorHover={theme.pallet.color.background}
              focusColor={theme.pallet.color.background}
            />
          </div>
          <ButtonContainer>
            <StyledButton disabled={loadingData}>
              Send
              <FaEnvelope />
              {loadingData && <Loading />}
            </StyledButton>
          </ButtonContainer>
          <NormalText>
            or you can reach me at <a href={`mailto:${email}`}>{email}</a>
          </NormalText>
        </FromContainer>
      </InnerContainer>
    </Container>
  );
};

export default Contact;
