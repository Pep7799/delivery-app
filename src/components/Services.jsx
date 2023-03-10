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
      <div>
        <div>
          <Image src={truck} />
        </div>
        <div>
          <Image src={free} />
        </div>
        <div>
          <Image src={flavor} />
        </div>
      </div>
    </div>
  );
};

export default Services;
