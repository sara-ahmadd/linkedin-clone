import React, { useState } from "react";
import headerLogo from "/images/logo-header.svg";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import home from "/images/home.svg";
import myNetwork from "/images/my-network.svg";
import jobs from "/images/jobs.svg";
import messaging from "/images/messaging.svg";
import notifications from "/images/notifications.svg";
import user from "/images/user-profile.png";
import work from "/images/work.svg";
import arrow from "/images/down-arrow.svg";
import { connect } from "react-redux";
import * as styles from "./headerStyles";
import { signOutFunc } from "../redux/actions";

const Header = (props) => {
  return (
    <styles.Container>
      <styles.Content>
        <styles.LeftSideContent>
          <NavLink to={"/home"}>
            <styles.Logo>
              <img src={headerLogo} alt="logo" />
            </styles.Logo>
          </NavLink>
          <styles.Search>
            <i>
              <FaSearch />
            </i>
            <input type="text" placeholder="Search" />
          </styles.Search>
        </styles.LeftSideContent>
        <styles.Navbar>
          <styles.List>
            <styles.ListItem className="active">
              <NavLink to={"/home"}>
                <img src={home} alt="home" />
                <h5>Home</h5>
              </NavLink>
            </styles.ListItem>
            <styles.ListItem>
              <NavLink to={"/mynetwork"}>
                <img src={myNetwork} alt="mynetwork" />
                <h5>My Network</h5>
              </NavLink>
            </styles.ListItem>
            <styles.ListItem>
              <NavLink to={"/jobs"}>
                <img src={jobs} alt="jobs" />
                <h5>Jobs</h5>
              </NavLink>
            </styles.ListItem>
            <styles.ListItem>
              <NavLink to={"/messaging"}>
                <img src={messaging} alt="messaging" />
                <h5>Messaging</h5>
              </NavLink>
            </styles.ListItem>
            <styles.ListItem>
              <NavLink to={"/notifications"}>
                <img src={notifications} alt="notifications" />
                <h5>Notifications</h5>
              </NavLink>
            </styles.ListItem>
            <styles.ListItem id="sign-out">
              <NavLink to={"/home"}>
                {props.user && props.user.photoURL ? (
                  <img id="user" src={props.user.photoURL} alt="user" />
                ) : (
                  <img id="user" src={user} alt="user" />
                )}
                <h5>
                  Me
                  <span>
                    <img src={arrow} alt="arrow" />
                  </span>
                </h5>
              </NavLink>
              <styles.SignOutList
                id="sign-out-shortcut"
                onClick={() => {
                  props.signOut();
                }}
              >
                <h4>Sign Out</h4>
              </styles.SignOutList>
            </styles.ListItem>
          </styles.List>
          <styles.Work>
            <NavLink to={"/work"}>
              <img src={work} alt="work" />
              <h5>
                work
                <span>
                  <img src={arrow} alt="arrow" />
                </span>
              </h5>
            </NavLink>
          </styles.Work>
        </styles.Navbar>
      </styles.Content>
    </styles.Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOutFunc()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
