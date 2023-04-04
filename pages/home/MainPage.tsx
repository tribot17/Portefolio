import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const MainPage = () => {
  return (
    <div className="home">
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="profile_img"
      >
        <Image
          src="/images/hd_profile.png"
          alt="profile_img"
          width={412}
          height={499}
        />
      </motion.div>
      <div className="main_text">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Tristan Boettger-Magnier</h2>
          <h3>Développeur React.js / Solidity</h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="/images/CV.pdf" download={"CV.pdf"}>
            <button className="cv_button">
              <p className="cv_button_text">Mon CV</p>{" "}
              <Image
                className="cv_button_logo"
                src="/images/Rectangle_11.png"
                alt="download"
                width={38}
                height={38}
              />
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default MainPage;
