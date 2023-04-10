import styled from "styled-components";
import {
  black,
  blue,
  blueBorder,
  darkGrey,
  greyColor,
  lightGrey,
  paleBlack,
  paleBlueBackground,
  paleGreyColor,
  white,
} from "../../colors";

const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100%;
  z-index: 3000;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 0 20px 0;
  background-color: ${paleBlack} !important;
`;
const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 500px;
  min-height: 350px;
  padding: 15px 0 15px 0;
  border-radius: 10px;
  margin: 0 auto;
  background-color: ${white};
  animation: fade-in 0.4s linear;
`;
const Content = styled.div`
  display: flex;
  max-width: 100%;
  height: fit-content;
  flex-direction: column;
  gap: 5px;
`;
const Title = styled.div`
  display: flex;
  flex-direction: row;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border-bottom: 1px solid ${greyColor};

  button {
    margin: 0;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${paleGreyColor};
    border: none;
    cursor: pointer;
    svg {
      transition: 0.3s;
      &:hover {
        scale: 1.5;
      }
    }
  }
  p {
    color: ${greyColor};
    font-size: 25px;
  }
`;
const Text = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 5px 10px;
  div {
    padding: 10px;
    display: flex;
    gap: 10px;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    h2 {
      margin: 0;
    }
  }
  div.postBody {
    textarea {
      resize: none;
      width: 100%;
      min-height: 100px;
      border: none;
      &:focus {
        outline: none;
      }
    }
  }
`;
const Buttons = styled.div`
  max-width: 100%;
  height: fit-content;
  padding: 0 10px 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Media = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  button {
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    gap: 5px;
    align-items: center;
    &:focus {
      outline: none;
    }
    &:nth-child(3) {
      padding-left: 15px;
      border-left: 1px solid ${greyColor};
    }
  }
`;
const PostButton = styled.button`
  width: 70px;
  border: none;
  color: ${(props) => (props.disabled ? lightGrey : white)};
  font-size: 17px;
  height: 30px;
  border-radius: 20px;
  background-color: ${(props) => (props.disabled ? paleGreyColor : blueBorder)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: 0.3s linear;
  &:hover {
    background-color: ${(props) => (props.disabled ? "none" : blue)};
  }
`;
const ShareMedia = styled.div`
  max-width: 100%;
  padding-bottom: 10px;
  text-align: center;
  > input {
    width: 90%;
    margin: 5px auto;
    padding: 5px 10px;
  }
  form > label {
    cursor: pointer;
    width: 90%;
    margin: 5px auto;
    padding: 5px 10px;
  }
`;
const UploadedMedia = styled.div`
  max-width: 100%;
  padding: 10px;
  margin: 10px;
  min-height: 80px;
  img {
    max-width: 100%;
    max-height: 300px;
  }
`;
export {
  Container,
  Content,
  UploadedMedia,
  PostButton,
  Buttons,
  Media,
  ModalBody,
  Text,
  Title,
  ShareMedia,
};
