import React from "react";

import { Container } from "./styles";

interface Props {
  message: string;
  color?: string;
}

const SnackBar: React.FC<Props> = ({ message = "", color }) => {
  return message && <Container color={color}>{message}</Container>;
};

export default SnackBar;
