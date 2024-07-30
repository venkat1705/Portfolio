import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import profile from "../images/profile.png";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
        src="https://avatars.githubusercontent.com/u/84761697?v=4"
        className="md:w-56 h-56 rounded-full object-cover mt-20"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-xl font-semibold mb-30">Little Background</h4>
        <p className="text-base">
          Passionate Full Stack Developer with 1.7 year of experience,possessing
          strong technical skills and proficiency in Full Stack development.
          Proven ability to contribute to the development of robust and scalable
          web applications. I have a solid understanding of both front-end and
          back-end technologies, ensuring a comprehensive approach to software
          development. Adept at ensuring the efficiency and responsiveness of
          systems. Seeking opportunities to leverage technical prowess and
          collaborative spirit for continued success in software development.
        </p>
      </div>
    </motion.div>
  );
}
