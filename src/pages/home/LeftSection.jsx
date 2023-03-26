import React from "react";
import styled from "styled-components";
import { white } from "./../../colors";
import defaultProfile from "/images/profile-background.svg";
import { connect } from "react-redux";
import photo from "/images/photo.svg";

const LeftSection = (props) => {
  return (
    <Container>
      <UserInfo>
        <Background />
        <Link>
          <UserPhoto>
            <img src={photo} alt="photo" />
          </UserPhoto>
          <Text>Welcome, {props.user && props.user.displayName}</Text>
        </Link>
        <a>
          <AddTextToPhoto>Add a photo</AddTextToPhoto>
        </a>
      </UserInfo>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: fit-content;
  text-align: center;
  background-color: ${white};
  justify-content: flex-start;
  border-radius: 10px;
`;
const Background = styled.div`
  border-radius: 10px 10px 0 0;
  background-image: url(${defaultProfile});
  width: 400px;
  height: 70px;
  @media (max-width: 425px) {
    width: 300px;
  }
`;
const Link = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const UserInfo = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
`;
const UserPhoto = styled.div`
  background-color: ${white};
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
`;
const Text = styled.h2`
  padding-top: 10px;
`;
const AddTextToPhoto = styled.p``;

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};
export default connect(mapStateToProps)(LeftSection);
