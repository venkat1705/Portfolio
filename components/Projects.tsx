import React from "react";
import { motion } from "framer-motion";

type Props = {};
const projects = [
  {
    id: 2,
    name: "SEO Insight",
    description:
      "SEO Insights is designed to provide analytics for Search Engine Optimization (SEO) strategies. Visualizing clicks and impressions data through intuitive graphs. Providing the relationship between keywords and corresponding pages, facilitating a deeper understanding of keyword effectiveness. Association between pages and their targeted keywords for optimizing the content alignment with SEO goals.",
    image:
      "https://res.cloudinary.com/bunny1705/image/upload/v1722319989/Website-Insights-SEO-Insights_1_odszyg.png",
  },
  {
    id: 1,
    name: "Rekrafted",
    description:
      "The goal of the RekrafteD is to create a secure, user-friendly platform that offers high-quality refurbished phones at affordable prices, promoting sustainability and customer satisfaction.",
    image:
      "https://res.cloudinary.com/bunny1705/image/upload/v1722319945/RekrafteD_vd80gb.png",
  },

  {
    id: 3,
    name: "Shrink CSS",
    description:
      "Shrink CSS is designed to detect the unused css in websites .The aim of this project is to optimize website performance by identifying the Unused css. This tool efficiently analyzes web pages and pinpoints CSS code that is not utilized in the page rendering process. This tool will provide significant benefits for developers who utilize CSS frameworks.",
    image:
      "https://res.cloudinary.com/bunny1705/image/upload/v1722319944/Css-Report-Shrink-CSS_l9ay22.png",
  },
];

export default function Projects({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-10">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              src={project.image}
              alt=""
              className="w-1/2 xl:w-1/4"
            />
            <div className="spac-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  {project.name}
                </span>
              </h4>
              <p className="text-lg text-center md:text-left">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7Ab0A]/10 left-0 h-[350px] -skew-y-12"></div>
    </motion.div>
  );
}
