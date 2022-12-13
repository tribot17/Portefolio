import Image from "next/image";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [width, setWidth] = useState<number>(1920);

  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener("resize", (e) => setWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", (e) => setWidth(window.innerWidth));
    };
  }, [width]);

  return (
    <div className={"header"}>
      <Image src={"/images/wave_1.png"} alt="img" width={width} height={width / 10}/>
    </div>
  );
};

export default Header;
