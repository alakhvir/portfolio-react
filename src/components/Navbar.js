import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo-lower.png";
import Burger from "./Burger";
import NavList from "./NavList";

const Nav = (props) => {
  const listItems = [
    {
      id: 1,
      name: "Home",
      to: "/",
    },
    {
      id: 2,
      name: "Resume",
      to: "/resume",
    },
    {
      id: 3,
      name: "Portfolio",
      to: "/portfolio",
    },
    {
      id: 4,
      name: "Contact Me",
      to: "/contact",
    },
  ];

  const [linkState, setLinkState] = useState(false);

  const burgerHandler = () => {
    setLinkState(!linkState);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className={`nav-links ${linkState ? "nav-active" : ""}`}>
          {listItems.map((item) => (
            <NavList
              className={linkState ? "animation" : ""}
              key={item.id}
              to={item.to}
              name={item.name}
            />
          ))}
        </ul>

        <Burger
          className={`burger ${linkState ? "toggle" : ""}`}
          onClick={burgerHandler}
        />
      </nav>
    </header>
  );
};

export default Nav;
