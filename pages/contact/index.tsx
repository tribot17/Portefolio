import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-200px" }}
      animate={{ opacity: 1, y: "-50%" }}
      transition={{ duration: 0.5 }}
      className="contact"
    >
      <div className="contact_container">
        <div className="contact_text">
          <h1>Contact</h1>
          <h1>tribot17@gmail.com</h1>
          <ul className="contact_logo_list">
            <li>
              <Link
                href={
                  "https://www.linkedin.com/in/tristan-boettger-magnier-862378210/"
                }
                target="_blank"
              >
                <Image
                  src={"/images/linkedin.png"}
                  alt="linkedin_logo"
                  width={91}
                  height={91}
                />
              </Link>
            </li>
            <li>
              <Link href={"https://github.com/tribot17"} target="_blank">
                <Image
                  src={"/images/github.png"}
                  alt="linkedin_logo"
                  width={91}
                  height={91}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
