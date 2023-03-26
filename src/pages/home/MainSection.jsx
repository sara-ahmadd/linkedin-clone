import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import user from "/images/user-profile.png";
import * as colors from "./../../colors";
import photo from "/images/photo-icon.svg";
import video from "/images/video-icon.svg";
import event from "/images/event.svg";
import article from "/images/article.svg";

const MainSection = (props) => {
  const [modal, setModal] = useState(false);

  const handleModalDisplay = () => {
    console.log("start a post");
  };
  return (
    <Container>
      <PostSection>
        <Post>
          <UserImg>
            {props.user ? (
              <img src={props.user.photoURL} alt="user-photo" />
            ) : (
              <img src={user} alt="user-photo" />
            )}
          </UserImg>
          <button onClick={handleModalDisplay}>Start a post</button>
        </Post>
        <Buttons>
          <button>
            <img src={photo} alt="photo" />
            <a href="#">Photo</a>
          </button>
          <button>
            <img src={video} alt="video" />
            <a href="#">Video</a>
          </button>
          <button>
            <img src={event} alt="event" />
            <a href="#">Event</a>
          </button>
          <button>
            <img src={article} alt="article" />
            <a href="#">Article</a>
          </button>
        </Buttons>
      </PostSection>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: fit-content;
  text-align: center;
  justify-content: flex-start;
  gap: 10px;
  width: 800px;
  filter: drop-shadow(0px 4px 3px rgba(114, 113, 113, 0.54));
  h4 {
    padding: 0;
    margin: 0;
  }
  div {
    background-color: ${colors.white};
  }
  @media (max-width: 768px) {
    width: 90%;
    padding-right: 10px;
    margin: 0 auto;
  }
`;
const PostSection = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  justify-content: flex-start;
  gap: 10px;
  max-width: 100%;
  padding: 15px 10px;
`;
const Post = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: center;
  button {
    flex: 2;
    height: 40px;
    border-radius: 30px;
    padding: 5px 10px;
    text-align: left;
    cursor: pointer;
    transition: 0.3s linear;
    border: 1px solid ${colors.greyColor};
    &:focus {
      outline: none;
    }
    &:hover {
      background-color: ${colors.greyColor};
    }
  }
`;
const UserImg = styled.div`
  width: 40px;
  height: 40px;
  img {
    border-radius: 50%;
    max-width: 100%;
    max-height: 100%;
  }
`;
const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  button {
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    &:focus {
      outline: none;
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(MainSection);
