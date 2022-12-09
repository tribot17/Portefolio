import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={"footer"}>
      <Image
        className="footer_image"
        src={"/images/wave_1.png"}
        alt="img"
        width={1920}
        height="150"
      />
    </div>
  );
};

export default Footer;
