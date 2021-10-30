import styled from "styled-components";

export const InputField = styled.fieldset`
  border: 1px solid ${(props) => props.theme.pallet.color.baseMedium};
  border-radius: 1rem;
  position: relative;
  margin: 1rem 0;
  transition: all 0.3s;
  padding: 0.2rem 0.5rem;

  & :hover {
    border-color: ${(props) => props.theme.pallet.color.baseDark};
    & > legend {
      color: ${(props) => props.theme.pallet.color.baseDark};
    }
  }

  &.Focus {
    border-color: ${(props) => props.theme.pallet.color.primaryLight};
  }

  &.FullWidth {
    width: 100%;
  }

  & > input ~ legend,
  & > textarea ~ legend {
    margin: 0;
    margin-left: 1rem;
    padding: 0 0.5rem;
    position: absolute;
    top: 0;
    transform: translateY(-50%);
    font-size: 1.3rem;
    z-index: 20;
    transition: all 0.3s;
    background-color: ${(props) => props.theme.pallet.color.base};
    color: ${(props) => props.theme.pallet.color.baseMedium};
  }

  & > input:placeholder-shown ~ legend {
    top: 50%;
    z-index: -1;
    font-size: 1.5rem;
  }

  & > textarea:placeholder-shown ~ legend {
    top: 0;
    z-index: -1;
    font-size: 1.5rem;
    transform: translateY(50%);
  }

  & > input:focus ~ legend,
  & > textarea:focus ~ legend {
    top: 0;
    transform: translateY(-50%);
    font-size: 1.3rem;
    z-index: 20;
    color: ${(props) => props.theme.pallet.color.primary};
  }
`;

export const FormInputs = styled.input`
  width: 100%;
  outline: none;
  padding: 1rem;
  font-size: 1.5rem;
  border: none;
  background-color: transparent;
`;

export const FormTextArea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 1rem;
  font-size: 1.5rem;
  border: none;
  background-color: transparent;
  resize: none;
`;
