import styled from "styled-components";
import { black, lightGrey, paleGreyColor, white } from "../../colors";

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: strech;
  height: fit-content;
  width: 100%;
  padding: 10px;
  padding-bottom: 0;
  margin-bottom: 10px;
  background-color: ${white};
  border-radius: 10px;
`;
const User = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;
const UserInfo = styled.div`
  display: flex;
  width: 90%;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
`;
const ElipseIcon = styled.div`
  width: 70px;
  height: 10%;
  img {
    max-width: 100%;
    max-height: 100%;
  }
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
    word-break: break;
  }
  h2 {
    color: ${black};
    font-size: 20px;
  }
  p {
    font-size: 14px;
    color: ${lightGrey};
  }
  @media (max-width: 425px) {
    > h2,
    p {
      font-size: 13px;
    }
  }
`;
const LikeAndShare = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  width: 100%;
  .comments-share {
    gap: 5px;
    display: flex;
    align-items: center;
    @media (max-width: 425px) {
      font-size: 12px;
    }
  }
  .likes {
    > p {
      padding: 0 5px;
      @media (max-width: 425px) {
        font-size: 12px;
      }
    }
    display: flex;
    align-items: center;
    button {
      padding: 0;
      border: none;
      background: none;
      img {
        width: 20px;
        height: 20px;
      }
    }
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
    max-height: 100%;
  }
`;
const SharedImage = styled.div`
  max-width: 100%;
  max-height: 300px;
  padding: 10px;
  text-align: center;
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
  border-top: 1px solid ${lightGrey};
  @media (max-width: 425px) {
    padding: 5px;
    justify-content: center;
    gap: 5px;
    > button > span {
      font-size: 10px;
    }
    > button > img {
      width: 20px;
      height: 20px;
    }
  }
  button {
    border: none;
    cursor: pointer;
    background: transparent;
    display: flex;
    justify-content: center;
    gap: 5px;
    align-items: center;
    height: 100%;
    width: calc(100% / 4);
    transition: 0.3s linear;
    &:hover {
      background-color: ${paleGreyColor};
    }
  }
`;
export {
  ReactionToPost,
  PostContent,
  SharedImage,
  Article,
  Image,
  User,
  UserInfo,
  LikeAndShare,
  Details,
  Video,
  ElipseIcon,
};
