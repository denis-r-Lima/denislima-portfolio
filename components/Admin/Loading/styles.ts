import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const rotate = keyframes`
    0%{
      transform: rotate(0deg);  
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Loader = styled.div`
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  border: 5px solid ${(props) => props.theme.pallet.color.background};
  border-bottom: 5px solid ${(props) => props.theme.pallet.color.primary};
  animation: ${rotate} 0.8s linear infinite;
`;
