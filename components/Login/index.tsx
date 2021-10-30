import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";

import { Container, LoginForm, SubmitButton } from "./styles";
import StyledInput from "../StyledComponents/StyledInput/StyledInput";

const Login: React.FC = () => {
  const [alert, setAlert] = useState<string>("");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const { signIn } = useAuth();
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn(loginData.email, loginData.password);
      router.push("/admin");
    } catch (e) {
      console.log(e.response);
      setAlert("Invalid email or password!");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Container>
      <LoginForm onSubmit={onSubmit}>
        <h2>Sign Up</h2>
        <StyledInput
          name="email"
          type="email"
          title="Email"
          value={loginData.email || ""}
          onChange={handleChange}
        />
        <StyledInput
          name="password"
          type="password"
          title="Password"
          value={loginData.password || ""}
          onChange={handleChange}
        />
        <SubmitButton type="submit">Submit</SubmitButton>
        {!!alert && alert}
      </LoginForm>
    </Container>
  );
};

export default Login;
