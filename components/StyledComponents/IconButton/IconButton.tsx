import React, { ButtonHTMLAttributes } from "react";

import { ButtonIco } from "./styles";

const IconButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  const { children } = props;
  return <ButtonIco {...props}>{children}</ButtonIco>;
};

export default IconButton;
