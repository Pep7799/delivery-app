import React from "react";
import { SiHashnode } from "react-icons/si";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import css from "../styles/Footer.module.css";
import Image from "next/image";
import logo from "../assets/logo.jpg";

const Footer = () => {
  return (
    <div className={css.container}>
      <span>ALL RIGHTS RESERVED</span>
      <div className={css.medias}>
        <AiFillGithub size={50} />
        <AiFillTwitterCircle size={50} />
        <SiHashnode size={50} />
      </div>
      <div className={css.headerlogo}>
        {/* <img src="/assets/logo.jpg" alt="logo" /> */}
        <Image src={logo} className={css.logo} />
        <span className={css.logoName}>Creme la</span>
      </div>
    </div>
  );
};

export default Footer;
