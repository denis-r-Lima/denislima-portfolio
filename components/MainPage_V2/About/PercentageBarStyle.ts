import styled from "styled-components";

export const BarContainer = styled.div`
  width: 100%;
  margin: 0.4rem 0;
  display: flex;
`;

export const BarName = styled.div`
  width: 25%;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.pallet.color.primaryLight};
  text-align: center;
  font-size: 1.5rem;

  @media only screen and (max-width: 450px) {
    font-size: 1.2rem;
    width: 30%;
  }
`;

interface BarProps {
  width: string;
}

export const BarExternal = styled.div<BarProps>`
  width: 75%;
  background-color: ${(props) => props.theme.pallet.color.backgroundDarker};
  position: relative;

  &::after {
    content: "${(props) => props.width}";
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    font-family: ${(props) => props.theme.typography.fontFamilyTitle};
  }
  @media only screen and (max-width: 450px) {
    width: 70%;
  }
`;

export const BarInternal = styled.div<BarProps>`
  width: ${(props) => props.width};
  height: 100%;
  background-color: ${(props) => props.theme.pallet.color.primary};
  transition: transform 1.5s;
  transform-origin: left;
`;
