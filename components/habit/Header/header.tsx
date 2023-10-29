import React from "react";
import { FaShieldDog } from "react-icons/fa6";

import { Container } from "./styles";

const Header: React.FC = () => {
  return (
    <div>
      <Container>
        <h1>
          <FaShieldDog fontSize={"7rem"}></FaShieldDog>
        </h1>
        <h1>Lets track your habits!</h1>
      </Container>
    </div>
  );
};

export default Header;
