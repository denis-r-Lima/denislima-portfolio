import React, { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

interface StyledButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  backgroundColor?: string;
}

const StyledButton: React.FC<StyledButton> = (props) => {
  return <Container {...props}>{props.children}</Container>;
};

export default StyledButton;
