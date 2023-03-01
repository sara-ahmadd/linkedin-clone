import React from "react";
import styled from "styled-components";
import headerLogo from "./../images/logo-header.svg";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { black, greyColor, paleGreyColor } from "../colors";
import home from "./../images/home.svg";
import myNetwork from "./../images/my-network.svg";
import jobs from "./../images/jobs.svg";
import messaging from "./../images/messaging.svg";
import notifications from "./../images/notifications.svg";
import user from "./../images/user.svg";
import work from "./../images/work.svg";
import arrow from "./../images/down-arrow.svg";

const Header = () => {
  const showDropList = () => {
    console.log("hi");
  };
  return (
    <Container>
      <Content>
        <LeftSideContent>
          <NavLink to={"/home"}>
            <Logo>
              <img src={headerLogo} alt="logo" />
            </Logo>
          </NavLink>
          <Search>
            <i>
              <FaSearch />
            </i>
            <input type="text" placeholder="Search" />
          </Search>
        </LeftSideContent>
        <Navbar>
          <List>
            <ListItem className="active">
              <NavLink to={"/home"}>
                <img src={home} alt="home" />
                <h5>Home</h5>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to={"/mynetwork"}>
                <img src={myNetwork} alt="mynetwork" />
                <h5>My Network</h5>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to={"/jobs"}>
                <img src={jobs} alt="jobs" />
                <h5>Jobs</h5>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to={"/messaging"}>
                <img src={messaging} alt="messaging" />
                <h5>Messaging</h5>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to={"/notifications"}>
                <img src={notifications} alt="notifications" />
                <h5>Notifications</h5>
              </NavLink>
            </ListItem>
            <ListItem id="sign-out">
              <NavLink to={"/home"} onClick={showDropList}>
                <img width={30} height={30} src={user} alt="user" />
                <h5>
                  Me
                  <span>
                    <img src={arrow} alt="arrow" />
                  </span>
                </h5>
              </NavLink>
              <SignOutList>
                <h4>Sign Out</h4>
              </SignOutList>
            </ListItem>
          </List>
          <Work>
            <NavLink to={"/work"}>
              <img src={work} alt="work" />
              <h5>
                work
                <span>
                  <img src={arrow} alt="arrow" />
                </span>
              </h5>
            </NavLink>
          </Work>
        </Navbar>
      </Content>
    </Container>
  );
};
const Container = styled.div`
  margin: 0 auto;
  height: fit-content;
  width: 100%;
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
`;

const SignOutList = styled.a`
  & > h4 {
    margin: 0;
    color: ${black};
    background-color: ${paleGreyColor};
    padding: 10px;
    border-radius: 20px;
    position: absolute;
    width: 100px;
    top: 100%;
    left: 0;
    cursor: pointer;
  }
`;

const ListItem = styled.li`
  position: relative;
  &#sign-out {
    ${SignOutList} {
      display: none;
    }
    &:hover {
      ${SignOutList} {
        display: block;
      }
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
      fill: red;
      width: 30px;
      height: 30px;
      filter: invert(62%) sepia(6%) saturate(138%) hue-rotate(114deg)
        brightness(88%) contrast(85%);
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
`;

const Work = styled(ListItem)`
  border-left: 1px solid ${paleGreyColor};
  margin-left: 20px;
  padding-left: 10px;
  height: 80%;
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
  }
  &.active {
    border-bottom: none;
  }
`;
export default Header;
