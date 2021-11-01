import React, { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

const StyledButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return <Container {...props}>{props.children}</Container>;
};

export default StyledButton;
