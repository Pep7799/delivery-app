import React from "react";
import css from "../styles/Services.module.css";
import truck from "../assets/truck.jpg";
import Image from "next/image";
import free from "../assets/free.jpg";
import flavor from "../assets/flavor.jpg";

const Services = () => {
  return (
    <div>
      <div className={css.heading}>
        <span>Our Services</span>
        <span>Your favourite Ice-cream</span>
        {/* <span>To serve you better</span> */}
      </div>

      <div className={css.services}>
        <div className={css.eachService}>
          <div>
            <Image src={truck} className={css.imageContainer} />
          </div>
          <span>Fast delivery</span>
          <span>Within 30-45minutes regardless of the distance</span>
        </div>

        <div className={css.eachService}>
          <div>
            <Image src={free} className={css.imageContainer} />
          </div>
          <span>Free flavor</span>
          <span>Free flavor for best customer of the week!</span>
        </div>

        <div className={css.eachService}>
          <div>
            <Image src={flavor} className={css.imageContainer} />
          </div>
          <span>Varieties</span>
          <span>Varieties of flavor to catch up from</span>
        </div>
      </div>
    </div>
  );
};

export default Services;
