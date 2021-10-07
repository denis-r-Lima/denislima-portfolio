import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #eee;
  padding: 2rem 1rem;
  border-right: 1px solid #aaa;
  display: flex;
  flex-direction: column;
`;

export const AdminButton = styled.button`
  width: 100%;
  padding: 1rem 2rem;
  margin: 0.5rem;
  color: #666;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  text-align: left;
  font-size: 1.5rem;
  border-radius: 10rem;
  &:hover {
    color: #333;
    background-color: #f1f1f1;
  }

  &.Current {
    background-color: #fefefe;
    color: #333;
    cursor: default;

    &:hover {
      background-color: #fefefe;
    }
  }
`;

export const SignOutButton = styled(AdminButton)`
  margin-top: auto;
`;
