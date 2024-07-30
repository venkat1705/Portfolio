import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

const imagesArray = [
  {
    image: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    percentage: 90,
    name: "Node JS",
  },
  {
    image: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    percentage: 90,
    name: "React JS",
  },
  {
    image: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
    percentage: 80,
    name: "HTML5",
  },
  {
    image: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg",
    percentage: 80,
    name: "CSS3",
  },
  {
    image:
      "https://seeklogo.com/images/B/blockchain-logo-A0FE252BA6-seeklogo.com.png",
    percentage: 80,
    name: "BlockChain",
  },

  {
    image: "https://cdn.worldvectorlogo.com/logos/graphql-logo-2.svg",
    percentage: 90,
    name: "GraphQL",
  },
  {
    image: "https://www.svgrepo.com/show/303206/javascript-logo.svg",
    percentage: 90,
    name: "Javascript",
  },
  {
    image: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    percentage: 90,
    name: "Next JS",
  },
  {
    image: "https://cdn.worldvectorlogo.com/logos/aws-logo.svg",
    percentage: 80,
    name: "AWS",
  },
  {
    image: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg",
    percentage: 80,
    name: "Google Cloud",
  },
  {
    image: "https://nestjs.com/logo-small-gradient.76616405.svg",
    percentage: 90,
    name: "Nest JS",
  },
  {
    image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    percentage: 90,
    name: "Mongo DB",
  },
];

export default function Skills({ directionLeft }: Props) {
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
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[200px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill
      </h3>
      <div>
        <div className="relative grid grid-cols-6 gap-[140px] cursor-pointer mt-20 w-full">
          {imagesArray.map((item, i) => (
            <div className="group flex w-[200px] flex-col items-start ">
              <div className="flex items-center flex-col">
                <img
                  src={item.image}
                  alt="logo"
                  style={{
                    maxHeight: "200px",
                    maxWidth: "200px",
                  }}
                  className="rounded-full border w-14 h-14 border-gray-500 object-contain filter group-hover:grayscale transition duration-300 ease-in-out"
                />
                <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white rounded-full z-0 w-14 h-14">
                  <div className="flex items-center justify-center h-full">
                    <p className="text-xl font-bold text-black opacity-100">
                      {item.percentage}%
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-center">{item?.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
