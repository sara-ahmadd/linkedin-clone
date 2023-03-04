import React, { useEffect } from "react";
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
import LogoComponent from "./LogoComponent";
import mainImage from "./../../images/main-section.svg";
import { FcGoogle } from "react-icons/fc";
import { signUp } from "../../redux/actions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  console.log(props.user);
  useEffect(() => {
    props.user && navigate("/home");
  });
  return (
    <Container>
      <Navbar>
        <LogoComponent />
        <Links>
          <Join>Join Now</Join>
          <SignUp>Sign Up</SignUp>
        </Links>
      </Navbar>
      <Section>
        <LeftSection>
          <h1>Welcome to your profissional community</h1>
          <GoogleSignIn onClick={props.signInWithGoogle}>
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
const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signInWithGoogle: () => dispatch(signUp()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
