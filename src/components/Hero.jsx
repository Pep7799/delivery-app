import Image from "next/image";
import React from "react";
import css from "../styles/Hero.module.css";
import icecream from "../assets/ic2.jpg";
import animated from "../assets/animated.jpg";
import { MdOutlineLocalOffer } from "react-icons/md";

export const Hero = () => {
  return (
    <div className={css.container}>
      {/* left side */}
      <div className={css.left}>
        <div className={css.smallTitle}>
          <span> More than a scoop</span>
          <Image src={icecream} alt="" width={25} />
        </div>
        <div className={css.mainTitle}>
          <p>
            {" "}
            Get your <br /> yummy cream <br /> as <br />
            fast as possible
          </p>
          <button className={`btn ${css.btn}`}>Reach us here</button>
        </div>
      </div>

      {/* right */}
      <div className={css.right}>
        <div className={css.imageSection}>
          <Image src={animated} layout="intrinsic" alt="" />
        </div>

        <div className={css.visit}>
          <span>Check today's offer</span>
          <div>
            <MdOutlineLocalOffer />
          </div>
        </div>
      </div>
    </div>
  );
};
