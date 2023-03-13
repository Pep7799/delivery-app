import React from "react";
import css from "../styles/Menu.module.css";

export const Menu = ({ icecreams }) => {
  console.log(icecreams);
  return (
    <div className={css.container}>
      <div className={css.heading}>
        <span>OUR MENU</span>
        <span>Check out our menu </span>
        <span>and get it in a minute! </span>
      </div>
    </div>
  );
};
