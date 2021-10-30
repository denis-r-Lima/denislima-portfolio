import React, { InputHTMLAttributes } from "react";
import { useTheme } from "styled-components";

import { InputField, FormInputs, FormTextArea } from "./styles";

interface StyledInput
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  multiLine?: boolean;
  rows?: number;
  title?: string;
  fullWidth?: boolean;
}

const StyledInput = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  StyledInput
>((props, ref) => {
  const theme = useTheme();

  const onChangeFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { type } = e;
    const { parentElement } = e.target;
    if (type === "focus") {
      return (parentElement.style.borderColor = theme.pallet.color.primary);
    }
    if (type === "blur") {
      return (parentElement.style.borderColor = theme.pallet.color.baseDark);
    }
  };

  return (
    <InputField className={props.fullWidth && "FullWidth"}>
      {props.multiLine ? (
        <FormTextArea
          {...props}
          onFocus={onChangeFocus}
          onBlur={onChangeFocus}
          placeholder=" "
          rows={props.rows}
          ref={ref as React.MutableRefObject<HTMLTextAreaElement>}
        />
      ) : (
        <FormInputs
          {...props}
          onFocus={onChangeFocus}
          onBlur={onChangeFocus}
          placeholder=" "
          ref={ref as React.MutableRefObject<HTMLInputElement>}
        />
      )}
      <legend>{props.title}</legend>
    </InputField>
  );
});

export default StyledInput;
