import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { experience } from "../../interfaces/interface";

const DisplayExperiences = (exp: experience) => {
  return (
    <motion.div
      key={exp.title}
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>{exp.title}</h1>
      <h2>{exp.compagny}</h2>
      <h2>{exp.time}</h2>
      <p>{exp.description}</p>
      <div className="skills_display" style={{ marginTop: "25px" }}>
        {exp.skills &&
          exp.skills.map((skill: any, index: number) => (
            <Image
              key={index}
              src={skill.src}
              alt={skill.src}
              width={skill.width}
              height={skill.height}
              className="skill"
            />
          ))}
      </div>
    </motion.div>
  );
};

export default DisplayExperiences;
