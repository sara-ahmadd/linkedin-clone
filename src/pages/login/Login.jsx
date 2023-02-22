import React from "react";
import {
  Container,
  GoogleSignIn,
  Join,
  LeftSection,
  Links,
  Logo,
  Navbar,
  RightSection,
  Section,
  SignUp,
} from "./LoginStyles";
import logo from "./../../images/logo.svg";
import mainImage from "./../../images/main-section.svg";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";
const Login = () => {
  return (
    <Container>
      <Navbar>
        <Logo>
          <NavLink to={"/"}>
            <img width={200} height={150} src={logo} alt="linkedin" />
          </NavLink>
        </Logo>
        <Links>
          <Join>Join Now</Join>
          <SignUp>Sign Up</SignUp>
        </Links>
      </Navbar>
      <Section>
        <LeftSection>
          <h1>Welcome to your profissional community</h1>
          <GoogleSignIn>
            <i>
              <FcGoogle />
            </i>
            <p>Sign in with google</p>
          </GoogleSignIn>
        </LeftSection>
        <RightSection>
          <img src={mainImage} alt="linkedin" />
        </RightSection>
      </Section>
    </Container>
  );
};

export default Login;
