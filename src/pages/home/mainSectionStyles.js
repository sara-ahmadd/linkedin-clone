import * as colors from "./../../colors";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 800px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  filter: drop-shadow(0px 4px 3px rgba(114, 113, 113, 0.54));
  h4 {
    padding: 0;
    margin: 0;
  }
  div {
    background-color: none !important;
  }

  @media (max-width: 1100px) {
    width: 90%;
    margin: 0 auto;
  }
`;
const PostSection = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 15px 10px;
  background-color: ${colors.white};
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
      background-color: ${colors.lightGrey};
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
const iconsDiv = styled.div`
  width: 90%;
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

const Buttons = styled(iconsDiv)``;
const NewsFeed = styled.div`
  background-color: transparent !important;
  width: 100%;
`;
const Loader = styled.div`
  background: none;
  div {
    background: none;
    img {
      width: 50px;
      height: 50px;
    }
  }
`;

export {
  Buttons,
  NewsFeed,
  iconsDiv,
  UserImg,
  Post,
  PostSection,
  Container,
  Loader,
};
