import Image from "next/image";
import React from "react";
import Logo from "../images/logo.png";
import { motion } from "framer-motion";
import { GrReactjs } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";
import { SiAmazonaws, SiGooglecloud, SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiMaterialui } from "react-icons/si";

type Props = {
  cardisLeft?: boolean;
};

export default function ExperienceCard({ cardisLeft }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center justify-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duriation-200 overflow-hidden">
      <motion.div
        initial={{
          y: 0,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
      ></motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-xl font-light mt-5">FullStack Developer Intern</h4>
        <p className="font-bold text-xl mt-1">CSTECH INFOSLOUTIONS PVT LTD</p>
        <div className="flex flex-row justify-between mt-5">
          <div>
            <GrReactjs className="text-[#F7Ab0A]" />
          </div>
          <FaNodeJs className="text-[#F7Ab0A]" />
          <SiMongodb className="text-[#F7Ab0A]" />
          <SiTailwindcss className="text-[#F7Ab0A]" />
          <SiMaterialui className="text-[#F7Ab0A]" />
          <SiGooglecloud className="text-[#F7Ab0A]" />
          <SiAmazonaws className="text-[#F7Ab0A]" />
        </div>
        <p className="uppercase py-5 text-gray-300">January 2023 - July 2023</p>
        <p className="">
          During my Six-month internship, I worked as both a frontend and
          backend developer, significantly enhancing my skills in the MERN
          stack. I embraced each task as a challenge to improve myself. The
          experience also allowed me to learn a great deal about project
          management, including participating in daily scrums and weekly
          retrospective meetings to track project status and progress.
        </p>

        <div className="py-6">
          <p className="antialiased">Project Management:</p>

          <ul className="list-disc space-y-4 ml-5 text-sm mt-2">
            <li>Participated in daily scrum meetings</li>
            <li>Engaged in weekly retrospective meetings</li>
          </ul>
        </div>
        <div className="py-2">
          <p className="antialiased">Professional Growth:</p>

          <ul className="list-disc space-y-4 ml-5 text-sm mt-2">
            <li>Tackled each task as a challenge to improve my skills</li>
            <li>
              Learned efficient project tracking and team collaboration
              techniques
            </li>
            <li>Improved problem-solving abilities</li>
            <li>
              Gained practical experience in a professional development
              environment
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
