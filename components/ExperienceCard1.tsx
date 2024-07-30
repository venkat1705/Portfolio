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

export default function ExperienceCard1({ cardisLeft }: Props) {
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
        <h4 className="text-xl font-light mt-5">FullStack Developer</h4>
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
        <p className="uppercase py-5 text-gray-300">January 2023 - Present</p>
        <p className="">
          I successfully managed multiple projects simultaneously, showcasing
          strong organizational and multitasking abilities. My role involved
          ensuring adherence to best practices and standards in API development,
          facilitating seamless integration with various systems. Additionally,
          I worked with Customer Relationship Management (CRM) tools to optimize
          workflow efficiency and collaborated with different integration
          platforms to enable seamless communication between diverse software
          applications.
        </p>

        <div className="py-6">
          <p className="antialiased">Project Management:</p>

          <ul className="list-disc space-y-4 ml-5 text-sm mt-2">
            <li>
              Successfully handled multiple projects concurrently, demonstrating
              exceptional organizational and multitasking skills.
            </li>
            <li>
              Developed and maintained project timelines, ensuring all
              milestones were met on schedule.
            </li>
          </ul>
        </div>
        <div className="py-2">
          <p className="antialiased">API Development:</p>

          <ul className="list-disc space-y-4 ml-5 text-sm mt-2">
            <li>
              Ensured adherence to best practices and standards for seamless
              integration with various systems.
            </li>
            <li>
              Collaborated with frontend and backend teams to ensure cohesive
              functionality and performance.
            </li>
          </ul>
        </div>
        <div className="py-2">
          <p className="antialiased">
            These experiences have not only honed my technical skills but also
            enhanced my ability to manage complex projects, collaborate
            effectively with diverse teams, and ensure high standards of quality
            in API development and system integration.
          </p>
        </div>
      </div>
    </article>
  );
}
