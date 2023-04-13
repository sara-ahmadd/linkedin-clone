import React from "react";
import styled from "styled-components";
import {
  black,
  blueBorder,
  greyColor,
  paleGreyColor,
  white,
} from "./../../colors";
import defaultProfile from "/images/profile-background.svg";
import { connect } from "react-redux";
import photo from "/images/photo.svg";
import connectionIcon from "/images/connection-icon.svg";
import myItems from "/images/item-icon.svg";
import plus from "/images/plus-icon.svg";

const LeftSection = (props) => {
  return (
    <Container>
      <Top>
        <UserInfo>
          <Background />
          <Link>
            <UserPhoto>
              <img src={photo} alt="photo" />
            </UserPhoto>
            <Text>
              Welcome, {props.user ? props.user.displayName : "there!"}
            </Text>
          </Link>
          <a>
            <AddTextToPhoto>Add a photo</AddTextToPhoto>
          </a>
        </UserInfo>
        <Connections>
          <p id="text">Connections</p>
          <h4>
            <span>Grow your network</span>
            <img src={connectionIcon} alt="img" />
          </h4>
        </Connections>
        <MyItems>
          <img src={myItems} alt="img" />
          <p>My items</p>
        </MyItems>
      </Top>
      <Bottom>
        <Links>
          <h4>Groups</h4>
          <h4>
            <span>Events</span>
            <span>
              <img src={plus} alt="img" />
            </span>
          </h4>
          <h4>Follow Hashtags</h4>
        </Links>
        <Discover>Discover more</Discover>
      </Bottom>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 300px;
  text-align: center;
  justify-content: flex-start;
  gap: 10px;
  h4 {
    padding: 0;
    margin: 0;
  }
  div {
    background-color: ${white};
  }
  @media (max-width: 1100px) {
    width: 90%;
    margin: 0 auto;
  }
`;
const Top = styled.div`
  border-radius: 10px;
  filter: drop-shadow(0px 4px 3px rgba(114, 113, 113, 0.54));
`;
const Bottom = styled.div`
  border-radius: 10px;
  filter: drop-shadow(0px 4px 3px rgba(114, 113, 113, 0.54));
`;

const Background = styled.div`
  border-radius: 10px 10px 0 0;
  background-image: url(${defaultProfile});
  background-position: center;
  background-size: 500px;
  height: 70px;
  @media (max-width: 425px) {
    width: 100%;
  }
`;
const Link = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
`;
const UserInfo = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${greyColor};
`;
const UserPhoto = styled.div`
  background-color: ${white};
  padding: 5px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
`;
const Text = styled.h2`
  padding-top: 10px;
  color: ${black};
`;
const AddTextToPhoto = styled.p`
  cursor: pointer;
  color: ${blueBorder};
`;
const Connections = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 5px;
  border-bottom: 1px solid ${greyColor};
  h4,
  p {
    padding: 0;
    margin: 0;
    width: 100%;
    text-align: left;
  }
  #text {
    color: ${greyColor};
    font-size: 15px;
  }
  h4 {
    display: flex;
    justify-content: space-between;
  }
`;
const MyItems = styled.div`
  display: flex;
  gap: 7px;
  padding: 5px 10px;
  p {
    font-weight: bold;
  }
`;
const Links = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-bottom: 1px solid ${greyColor};
  h4 {
    width: 100%;
    text-align: left;
    font-weight: bold;
  }
  h4:nth-child(2) {
    display: flex;
    justify-content: space-between;
  }
`;
const Discover = styled.p`
  padding: 5px 10px;
  color: ${greyColor};
  text-align: left;
`;

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};
export default connect(mapStateToProps)(LeftSection);
