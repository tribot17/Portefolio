import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import DisplayExperiences, { experience } from "./DisplayExperiences";
import { expArray } from "../../data/experience";

const Experience = () => {
  const [indexExp, setIndexExp] = useState(0);
  // const experienceDisplayRef = useRef();


  const changeExp = (e: any) => {
    if (e.target == "img.array_up") {
      if (indexExp == 0) setIndexExp(expArray.length - 1);
      else setIndexExp(indexExp-1);
    } else {
      if (indexExp == expArray.length - 1) setIndexExp(0);
      else setIndexExp(indexExp + 1);
    }
  };

  return (
    <div className="experiences">
      <div className="experiences_container">
        <div className="experiences_text">
          <Image
            src={"/images/arrow.png"}
            alt={"arrow_up"}
            className="arrow_up"
            width={45}
            height={45}
            onClick={changeExp}
          />
          <DisplayExperiences {...expArray[indexExp]}/>
          <Image
            src={"/images/arrow_down.png"}
            alt={"arrow_down"}
            className="arrow_down"
            width={45}
            height={45}
            onClick={changeExp}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
