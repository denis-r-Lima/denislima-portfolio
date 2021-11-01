import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 8rem;
  padding: 2rem 5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  transition: opacity 0.2s linear 0.25s;
  z-index: 1000;
  color: ${(props) => props.theme.pallet.color.background};

  &.hide {
    transition: opacity 0.2s, transform 0s linear 0.25s;
    transform: scaleX(0);
    opacity: 0;
  }
`;
