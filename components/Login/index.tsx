import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";

import { Container, LoginForm, SubmitButton, FormInputs } from "./styles";

const Login: React.FC = () => {
  const [alert, setAlert] = useState<string>("");
  const { signIn } = useAuth();
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signIn(email, password);
      router.push("/admin");
    } catch (e) {
      console.log(e.response);
      setAlert("Invalid email or password!");
    }
  };

  return (
    <Container>
      <LoginForm onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <FormInputs type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <FormInputs type="password" name="password" id="password" />
        <SubmitButton type="submit">Submit</SubmitButton>
        {!!alert && alert}
      </LoginForm>
    </Container>
  );
};

export default Login;
