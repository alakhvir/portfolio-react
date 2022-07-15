import React from "react";

const Burger = (props) => {
  return (
    <div className={props.className} onClick={props.onClick}>
      <div className="line-1"></div>
      <div className="line-2"></div>
      <div className="line-3"></div>
    </div>
  );
};

export default Burger;
