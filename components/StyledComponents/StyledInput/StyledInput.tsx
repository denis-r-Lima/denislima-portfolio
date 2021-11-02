import React, { InputHTMLAttributes, useState } from "react";

import { InputField, FormInputs, FormTextArea } from "./styles";

interface StyledInput
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  multiLine?: boolean;
  rows?: number;
  title?: string;
  fullWidth?: boolean;
  backgroundColor?: string;
  color?: string;
  colorHover?: string;
  focusColor?: string;
}

const StyledInput = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  StyledInput
>((props, ref) => {
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
      backgroundColor={props.backgroundColor}
      color={props.color}
      colorHover={props.colorHover}
      focusColor={props.focusColor}
    >
      {props.multiLine ? (
        <FormTextArea
          {...props}
          onFocus={onChangeFocus}
          onBlur={onChangeFocus}
          placeholder=" "
          rows={props.rows}
          ref={ref as React.MutableRefObject<HTMLTextAreaElement>}
          color={props.color}
        />
      ) : (
        <FormInputs
          {...props}
          onFocus={onChangeFocus}
          onBlur={onChangeFocus}
          placeholder=" "
          ref={ref as React.MutableRefObject<HTMLInputElement>}
          color={props.color}
        />
      )}
      <legend>{props.title}</legend>
    </InputField>
  );
});

export default StyledInput;
