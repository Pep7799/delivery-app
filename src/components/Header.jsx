import React from "react";
import css from "../styles/Header.module.css";
import Image from "next/image";
import logo from "../assets/logo.jpg";
import { HiShoppingBag } from "react-icons/hi";

const Header = () => {
  return (
    <div className={css.header}>
      {/* logo and name side */}
      <div className={css.headerlogo}>
        {/* <img src="/assets/logo.jpg" alt="logo" /> */}
        <Image src={logo} className={css.logo} />
        <span className={css.logoName}>Creme la</span>
      </div>

      {/* Menu side */}
      <ul className={css.menuItems}>
        <li>Home</li>
        <li>Menu</li>
        <li>Contact</li>
      </ul>

      {/* Cart */}
      <div className={css.cartSide}>
        <div className={css.cart}>
          <HiShoppingBag color="var(--hoverColor)" size={25} />
          <div className={css.label}>1</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
