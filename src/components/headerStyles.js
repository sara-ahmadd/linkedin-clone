import styled from "styled-components";
import { black, greyColor, paleGreyColor, white } from "../colors";

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: ${white};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  padding-bottom: 5px;
  @media (min-width: 2100px) {
    width: 100%;
  }
`;
const Content = styled.div`
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const LeftSideContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Logo = styled.div`
  width: 40px;
  height: 40px;
  & > img {
    width: 100%;
    height: 100%;
  }
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  & > input {
    width: 100%;
    height: 20px;
    padding: 10px 10px 10px 40px;
    background-color: ${paleGreyColor};
    border: none;
    font-size: 20px;
    &:focus {
      outline: none;
    }
  }
  & > i {
    position: absolute;
    top: 50%;
    left: 15px;
    padding-top: 5px;
    transform: translateY(-50%);
    font-size: 15px;
  }
`;

const Navbar = styled.nav`
  height: 70px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    gap: 2px;
    border-top: 2px solid ${greyColor};
    background-color: ${paleGreyColor};
    & > ul {
      gap: 10px;
    }
  }
  & > a {
    display: block;
    color: ${greyColor};
  }
`;

const List = styled.ul`
  padding-left: 10px;
  padding-top: 10px;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const SignOutList = styled.a`
  & > h4 {
    margin: 0;
    color: ${black};
    background-color: ${white};
    padding: 10px 20px;
    position: absolute;
    width: 100px;
    top: 100%;
    left: 0;
    cursor: pointer;
    @media (max-width: 767px) {
      top: -90%;
      left: -30%;
    }
  }
`;

const ListItem = styled.li`
  position: relative;
  &#sign-out {
    ${SignOutList} {
      display: none;
    }
  }
  & > a {
    color: ${greyColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    background-color: transparent;
    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      filter: invert(62%) sepia(6%) saturate(138%) hue-rotate(114deg)
        brightness(88%) contrast(85%);
      &#user {
        border-radius: 50%;
        filter: none;
      }
    }
    h5 {
      margin: 0;
      color: ${greyColor};
      display: flex;
      align-items: flex-end;
      gap: 5px;
      span {
        display: inline-block;
        padd0ng: 5px;
        display: flex;
        align-items: flex-end;
        img {
          width: 15px;
          height: 15px;
        }
      }
    }
    @media (max-width: 767px) {
      & > h5 {
        display: none;
      }
    }
    &:hover {
      img {
        filter: invert(0%) sepia(98%) saturate(9%) hue-rotate(17deg)
          brightness(107%) contrast(101%);
        &#user {
          filter: none;
        }
      }

      h5 {
        color: ${black};
      }
    }
  }
  &.active {
    border-bottom: 2px solid #000;
    a {
      color: ${black};
      img {
        filter: invert(0%) sepia(98%) saturate(9%) hue-rotate(17deg)
          brightness(107%) contrast(101%);
      }
      h5 {
        color: ${black};
      }
    }
  }
  &:hover {
    &#sign-out {
      ${SignOutList} {
        display: block;
      }
    }
  }
`;

const Work = styled(ListItem)`
  border-left: 1px solid ${paleGreyColor};
  margin-left: 20px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 7px;
  & > h5 {
    margin: 0;
    color: ${greyColor};
  }
  @media (max-width: 425px) {
    margin-left: 5px;
    padding-left: 5px;
    & > h5 {
      display: none;
    }
  }
  &.active {
    border-bottom: none;
  }
`;
export {
  Container,
  Content,
  Navbar,
  List,
  LeftSideContent,
  ListItem,
  Logo,
  Work,
  Search,
  SignOutList,
};
