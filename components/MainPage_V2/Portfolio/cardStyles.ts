import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 35rem;
  height: 35rem;
  overflow: hidden;

  &:hover {
    & > .top {
      transition: transform 0.5s ease-in-out;
      transform: translateY(0);
    }
    & > .bottom {
      transition: transform 0.5s ease-in-out;
      transform: translateY(0);
    }
    & > :last-child {
      opacity: 1;
      transform: scale(1);
      transition: opacity 0.4s linear 0.55s, transform 0s linear 0.5s;
    }
  }
`;

export const Door = styled.div`
  position: absolute;
  width: 100%;
  height: 50%;
  background-color: ${(props) => props.theme.pallet.color.backgroundDarker};
  transition: transform 0.5s ease-in-out 0.45s;
  &.top {
    top: 0;
    transform: translateY(-100%);
  }
  &.bottom {
    bottom: 0;
    transform: translateY(100%);
  }
`;

type ImageProps = {
  src: string;
};

export const Image = styled.div<ImageProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Text = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 1.5rem;
  opacity: 0;
  transform: scale(0);
  transition: opacity 0.4s, transform 0s linear 0.4s;
`;
