import React, { InputHTMLAttributes, useState } from "react";
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
  const [isFocused, setIsFocused] = useState(false);

  const onChangeFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { type } = e;
    if (type === "focus") {
      return setIsFocused(true);
    }
    if (type === "blur") {
      return setIsFocused(false);
    }
  };

  return (
    <InputField
      className={`${props.fullWidth && "FullWidth"} ${isFocused && "Focus"}`}
    >
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
