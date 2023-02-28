import React from "react";
import styled from "styled-components";
import headerLogo from "./../images/logo-header.svg";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { black, darkGrey, greyColor, paleGreyColor } from "../colors";
import { FaHome } from "react-icons/fa";
import myNetwork from "./../images/my-network.svg";
import jobs from "./../images/jobs.svg";
import messaging from "./../images/messaging.svg";
import notifications from "./../images/notifications.svg";
import work from "./../images/work.svg";

const Header = () => {
  return (
    <Container>
      <Content>
        <LeftSideContent>
          <Link to={"/home"}>
            <Logo>
              <img src={headerLogo} alt="logo" />
            </Logo>
          </Link>
          <Search>
            <i>
              <FaSearch />
            </i>
            <input type="text" placeholder="Search" />
          </Search>
        </LeftSideContent>
        <Navbar>
          <List>
            <li>
              <Link to={"/home"}>
                <i>
                  <FaHome />
                </i>
              </Link>
              <h5>Home</h5>
            </li>
            <li>
              <Link to={"/mynetwork"}>
                <img src={myNetwork} alt="img" />
              </Link>
              <h5>My Network</h5>
            </li>
            <li>
              <Link to={"/jobs"}>
                <img src={jobs} alt="img" />
              </Link>
              <h5>Jobs</h5>
            </li>
            <li>
              <Link to={"/messaging"}>
                <img src={messaging} alt="img" />
              </Link>
              <h5>Messaging</h5>
            </li>
            <li>
              <Link to={"/notifications"}>
                <img src={notifications} alt="img" />
              </Link>
              <h5>Notifications</h5>
            </li>
            <li>
              <Link to={"/home"}>
                <i>
                  <FaHome />
                </i>
              </Link>
              <h5>Me</h5>
            </li>
          </List>
          <Link to={"/work"}>
            <Work>
              <img src={work} alt="work" />
              <h5>Work</h5>
            </Work>
          </Link>
        </Navbar>
      </Content>
    </Container>
  );
};
const Container = styled.div`
  margin: 0 auto;
  height: fit-content;
  width: 100%;
  padding: 0 20px;
  background-color: "#eee";
  position: fixed;
  top: 0;
  @media (min-width: 2100px) {
    width: 70%;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
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
  width: 30px;
  height: 30px;
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
    width: 80%;
    height: 10px;
    padding: 10px 10px 10px 40px;
    background-color: ${paleGreyColor};
    border: none;
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
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
  }
  & > a {
    display: block;
    color: ${greyColor};
  }
`;

const List = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;
  & > li {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > a {
      color: ${greyColor};
      text-decoration: none;
      background-color: transparent;
      & > i {
        font-size: 20px;
      }
    }
    & > h5 {
      margin: 0;
      color: ${greyColor};
    }
    @media (max-width: 425px) {
      & > h5 {
        display: none;
      }
    }
  }
`;
const Work = styled.div`
  border-left: 1px solid ${paleGreyColor};
  margin-left: 20px;
  height: 80%;
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
      & > h5 {
        display: none;
      }
`;
export default Header;
