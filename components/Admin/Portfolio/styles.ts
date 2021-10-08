import styled from "styled-components";

const mainColor = "hsl(204, 70%, 55%)";
const lighterColor = "hsl(204, 70%, 70%)";

const secondaryColor = "hsl(24, 90%, 55%)";
const secondaryLighter = "hsl(24, 90%, 70%)";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  font-size: 1.8rem;
  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;
