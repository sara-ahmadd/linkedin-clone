import React from "react";
import styled from "styled-components";
import { black, lightGrey, white } from "../../colors";
import comment from "/images/share-comment.svg";
import send from "/images/send-icon.svg";
import share from "/images/share-icon.svg";
import ReactPlayer from "react-player";

const SinglePost = ({ post }) => {
  const { user, description, video, photo } = post;
  return (
    <PostContent>
      {post.user && (
        <>
          <UserInfo>
            <Image>
              <img src={user.image && user.image} alt="user-photo" />
            </Image>
            <Details>
              <h2>{user.name && user.name}</h2>
              <p>{user.email && user.email}</p>
              <p>{user.time.seconds && user.time.seconds}</p>
            </Details>
          </UserInfo>
        </>
      )}
      <Article>{description}</Article>
      <Video> {video !== "" ? <ReactPlayer url={video} /> : null}</Video>
      <SharedImage>
        {photo !== "" ? <img src={photo} alt="photo" /> : null}
      </SharedImage>
      <ReactionToPost>
        <button>
          <img src={comment} alt="image" /> <span>Like</span>
        </button>
        <button>
          <img src={comment} alt="image" /> <span>Comment</span>
        </button>
        <button>
          <img src={share} alt="image" /> <span>Share</span>
        </button>
        <button>
          <img src={send} alt="image" /> <span>send</span>
        </button>
      </ReactionToPost>
    </PostContent>
  );
};
const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: strech;
  height: fit-content;
  max-width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  background-color: ${white};
`;
const UserInfo = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  padding: 10px;
  align-items: center;
`;
const Image = styled.div`
  width: 60px;
  height: 60px;
  img {
    border-radius: 50%;
    max-height: 100%;
    max-width: 100%;
  }
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  > h2,
  p {
    margin: 0;
    padding: 0;
  }
  h2 {
    color: ${black};
    font-size: 20px;
  }
  p {
    font-size: 14px;
    color: ${lightGrey};
  }
`;
const Article = styled.p`
  padding: 10px;
  margin: 0;
  text-align: left;
`;
const Video = styled.div`
  max-width: 100%;
  max-height: 500px;
  padding: 10px;
  display: flex;
  justify-content: center;
  video {
    width: 300px;
    max-height: 100%;
  }
`;
const SharedImage = styled.div`
  max-width: 100%;
  max-height: 300px;
  padding: 10px;
  img {
    max-width: 100%;
    max-height: 300px;
  }
`;
const ReactionToPost = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  height: 50px;
  padding: 10px 20px;
  border-top: 1px solid ${lightGrey};
  button {
    border: none;
    cursor: pointer;
    background: none;
    display: flex;
    justify-content: center;
    gap: 5px;
    align-items: center;
  }
`;
export default SinglePost;
