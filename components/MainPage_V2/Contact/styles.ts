import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.pallet.color.backgroundSecondary};
`;

export const InnerContainer = styled.div`
  width: 100%auto;
  max-width: 1600px;
`;

export const FromContainer = styled.form`
  width: 100%;
  max-width: 500px;
  margin: 5rem auto;

  @media only screen and (max-width: 450px) {
    max-width: 300px;
  }
`;

export const NormalText = styled.p`
  color: ${(props) => props.theme.pallet.color.primaryLight};
  margin: 3rem;
  text-align: center;
  font-size: 1.7rem;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.pallet.color.background};
  margin: 5rem;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  margin-top: 4rem;
  width: fit-content;
  margin-left: auto;
`;
