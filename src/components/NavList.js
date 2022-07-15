import React from "react";
import { NavLink } from "react-router-dom";

const NavList = (props) => {
  return (
    <li className={props.className}>
      <NavLink to={props.to}>{props.name}</NavLink>
    </li>
  );
};

export default NavList;
