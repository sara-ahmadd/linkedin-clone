import React from "react";
import { Logo } from "./LoginStyles";
import logo from "./../../images/logo.svg";
import { NavLink } from "react-router-dom";

const LogoComponent = () => {
  return (
    <Logo>
      <NavLink to={"/"}>
        <img width={200} height={150} src={logo} alt="linkedin" />
      </NavLink>
    </Logo>
  );
};

export default LogoComponent;
