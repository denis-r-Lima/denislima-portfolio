import styled from "styled-components";

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

export const HalfGrid = styled.div`
  width: 50%;
  min-width: 350px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media only screen and (max-width: 450px) {
    width: 100%;
    min-width: 0;
  }
`;

export const InsideDiv = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-25%, -50%);
`;

export const SaveButton = styled.button`
  outline: none;
  border: none;
  border-radius: 1rem;
  color: #fff;
  font-size: 1.4rem;
  padding: 1rem 5rem;
  background-color: ${(props) => props.theme.pallet.color.primary};
  justify-self: center;
  cursor: pointer;
  transition: background-color linear 0.5s;
  align-self: flex-end;
  &:hover {
    background-color: ${(props) => props.theme.pallet.color.primaryLight};
  }
`;

export const AddButton = styled.button`
  height: 3rem;
  width: 3rem;
  outline: none;
  border: none;
  border-radius: 10rem;
  margin: 0 1rem;
  color: #fff;
  font-size: 2rem;
  background-color: ${(props) => props.theme.pallet.color.secondary};
  justify-self: center;
  cursor: pointer;
  transition: background-color linear 0.5s;
  align-self: flex-start;
  margin-bottom: 1rem;
  &:hover {
    background-color: ${(props) => props.theme.pallet.color.secondaryLight};
  }
`;

export const List = styled.ul`
  width: 100%;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  width: 50%;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding: 0.7rem 1rem 0;
  transition: all 0.4s;
`;
