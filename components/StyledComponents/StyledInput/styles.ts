import styled from "styled-components";

interface InputField {
  backgroundColor?: string;
  color?: string;
  colorHover?: string;
  focusColor?: string;
}

export const InputField = styled.fieldset<InputField>`
  border: 2px solid
    ${(props) => props.color || props.theme.pallet.color.baseMedium};
  position: relative;
  margin: 1rem 0;
  transition: all 0.3s;
  padding: 0.2rem 0.5rem;
  z-index: 1;

  & :hover {
    border-color: ${(props) =>
      props.colorHover || props.theme.pallet.color.baseDark};
    & > legend {
      color: ${(props) =>
        props.colorHover || props.theme.pallet.color.baseDark};
    }
  }

  &.Focus {
    border-color: ${(props) =>
      props.focusColor || props.theme.pallet.color.primaryLight};
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
    background-color: ${(props) =>
      props.backgroundColor || props.theme.pallet.color.base};
    color: ${(props) => props.color || props.theme.pallet.color.baseMedium};
  }

  & > input:placeholder-shown ~ legend {
    top: 50%;
    font-size: 1.5rem;
    user-select: none;
    cursor: text;
    z-index: -1;
  }

  & > textarea:placeholder-shown ~ legend {
    top: 0;
    font-size: 1.5rem;
    transform: translateY(50%);
    user-select: none;
    cursor: text;
    z-index: -1;
  }

  & > input:focus ~ legend,
  & > textarea:focus ~ legend {
    top: 0;
    transform: translateY(-50%);
    font-size: 1.3rem;
    z-index: 20;
    color: ${(props) => props.focusColor || props.theme.pallet.color.primary};
  }
`;

export const FormInputs = styled.input<InputField>`
  width: 100%;
  outline: none;
  padding: 1rem;
  font-size: 1.5rem;
  border: none;
  background-color: transparent;
  z-index: 3;
  color: ${(props) => props.color || props.theme.typography.color};
`;

export const FormTextArea = styled.textarea<InputField>`
  width: 100%;
  outline: none;
  padding: 1rem;
  font-size: 1.5rem;
  border: none;
  background-color: transparent;
  resize: none;
  color: ${(props) => props.color || props.theme.typography.color};
`;
