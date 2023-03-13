import Image from "next/image";
import React from "react";
import { urlFor } from "../../library/client";
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

      {/* menu */}
      {icecreams.map((icecream, id) => {
        const src = urlFor(icecream.image).url();
        return (
          <div className={css.icecreamMenu} key={id}>
            <div className={css.icecreamImage}>
              <Image
                loader={() => src}
                src={src}
                alt=""
                objectFit="cover"
                layout="fill"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
