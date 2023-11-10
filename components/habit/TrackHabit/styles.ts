import styled from "styled-components";

export const ExpandedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  max-height: 0;
  overflow: hidden;
  margin-top: -0.75rem;
  margin-bottom: -0.75rem;
  width: 65rem;
  max-width: 80%;
  &.expanded {
    max-height: 400rem;
  }
`;

export const HabitCard = styled.div`
  padding: 2rem 3rem;
  background-color: ${(props) => props.theme.pallet.color.primaryVeryLight};
  width: 70rem;
  max-width: 90%;
  border-radius: 0.3rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    & svg {
      transform: rotate(180deg);
      cursor: pointer;
      &.rotate {
        transform: rotate(0);
      }
    }
  }
`;

export const ExpandedSectionYears = styled.div`
  border-left: 2px solid ${(props) => props.theme.pallet.color.primaryVeryLight};
  padding: 1rem 2rem;
  width: 100%;
  color: ${(props) => props.theme.pallet.color.primaryVeryLight};
  display: flex;
  flex-direction: column;
  position: relative;
  &:last-child {
    border: 0;

    &::before {
      content: " ";
      background-color: ${(props) => props.theme.pallet.color.primaryVeryLight};
      position: absolute;
      top: -1rem;
      left: 0;
      width: 2px;
      height: 3rem;
    }
  }
`;

export const Year = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  border-bottom: 1px dotted
    ${(props) => props.theme.pallet.color.primaryVeryLight};

  &::before {
    content: " ";
    width: 1.5rem;
    background-color: ${(props) => props.theme.pallet.color.primaryVeryLight};
    height: 2px;
    position: absolute;
    top: calc(50% - 0rem);
    left: -2rem;
  }

  & div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    & svg {
      transform: rotate(180deg);
      cursor: pointer;
      &.rotate {
        transform: rotate(0);
      }
    }
  }
`;

export const ExpandedContainerMonth = styled.div`
  max-height: 0;
  overflow: hidden;
  &.expanded {
    max-height: 100rem;
  }
`;

export const ExpandedSectionMonth = styled.div`
  border-left: 2px solid ${(props) => props.theme.pallet.color.primaryVeryLight};
  border-bottom: 1px dotted
    ${(props) => props.theme.pallet.color.primaryVeryLight};
  padding: 0;
  padding-top: 1rem;
  padding-left: 2rem;
  margin-left: 2rem;
  width: calc(100% - 2rem);
  position: relative;
  color: ${(props) => props.theme.pallet.color.primaryVeryLight};
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &::before {
    content: " ";
    width: 1.5rem;
    background-color: ${(props) => props.theme.pallet.color.primaryVeryLight};
    height: 2px;
    position: absolute;
    top: calc(50% + 0rem);
    left: 0px;
  }

  &:last-child {
    border: 0;
    border-bottom: 1px dotted
      ${(props) => props.theme.pallet.color.primaryVeryLight};
    &::after {
      content: " ";
      background-color: ${(props) => props.theme.pallet.color.primaryVeryLight};
      position: absolute;
      top: 0;
      left: 0;
      width: 2px;
      height: 1.5rem;
    }
  }

  &.expanded {
    border-bottom: 1px dotted
      ${(props) => props.theme.pallet.color.primaryVeryLight};
  }
`;
