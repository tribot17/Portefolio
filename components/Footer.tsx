import React, { useEffect, useState } from "react";
import Image from "next/image";

const Footer = () => {
  const [width, setWidth] = useState<number>(1920);

  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener("resize", (e) => setWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", (e) => setWidth(window.innerWidth));
    };
  }, [width]);

  return (
    <div className={"footer"}>
      <Image
        className="footer_image"
        src={"/images/wave_1.png"}
        alt="img"
        width={width}
        height={width / 10}
      />
    </div>
  );
};

export default Footer;
