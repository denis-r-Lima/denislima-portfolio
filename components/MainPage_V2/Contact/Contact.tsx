import React from "react";
import { FaEnvelope } from "react-icons/fa";

import { useTheme } from "styled-components";
import StyledButton from "../../StyledComponents/StyledButton/StyledButton";
import StyledInput from "../../StyledComponents/StyledInput/StyledInput";
import { ButtonContainer, Title } from "./styles";

import { Container, FromContainer, InnerContainer, NormalText } from "./styles";

interface Props {
  email: string;
}

const Contact: React.FC<Props> = ({ email }) => {
  const theme = useTheme();
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <Container>
      <InnerContainer>
        <Title>Contact</Title>
        <FromContainer onSubmit={onSubmit} id="Contact">
          <NormalText>Have a question or want to work together?</NormalText>
          <StyledInput
            title="Name"
            name="name"
            backgroundColor={theme.pallet.color.backgroundSecondary}
            color={theme.pallet.color.background}
            colorHover={theme.pallet.color.background}
            focusColor={theme.pallet.color.background}
          />
          <StyledInput
            title="Email"
            name="email"
            type="email"
            backgroundColor={theme.pallet.color.backgroundSecondary}
            color={theme.pallet.color.background}
            colorHover={theme.pallet.color.background}
            focusColor={theme.pallet.color.background}
          />
          <StyledInput
            title="Message"
            name="message"
            multiLine
            rows={8}
            backgroundColor={theme.pallet.color.backgroundSecondary}
            color={theme.pallet.color.background}
            colorHover={theme.pallet.color.background}
            focusColor={theme.pallet.color.background}
          />
          <ButtonContainer>
            <StyledButton>
              Send
              <FaEnvelope />
            </StyledButton>
          </ButtonContainer>
          <NormalText>
            Or you can reach me at <a href={`mailto:${email}`}>{email}</a>
          </NormalText>
        </FromContainer>
      </InnerContainer>
    </Container>
  );
};

export default Contact;
