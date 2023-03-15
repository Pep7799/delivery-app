import Image from "next/image";
import React from "react";
import { urlFor } from "../../lib/client";
import css from "../styles/Menu.module.css";
import Link from "next/link";

export const Menu = ({ icecreams }) => {
  return (
    <div className={css.container}>
      <div className={css.heading}>
        <span>OUR MENU</span>
        <span>Check out our menu </span>
        <span>and get it in a minute! </span>
      </div>

      {/* menu */}
      <div className={css.iceMenu}>
        {icecreams.map((icecream, id) => {
          const src = urlFor(icecream.image).url();
          return (
            <div className={css.icecreamMenu} key={id}>
              <Link href={`./icecream/${icecream.slug.current}`}>
                <div className={css.icecreamImage}>
                  <Image
                    loader={() => src}
                    src={src}
                    alt=""
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
                <span className={css.iceName}>{icecream.name}</span>
                <span className={css.icePrice}>
                  <span style={{ color: "var(--hoverColor)" }}> ₦ </span>
                  {icecream.price[1]}
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
