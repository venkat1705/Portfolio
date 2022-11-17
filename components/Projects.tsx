import React from 'react'
import {motion} from 'framer-motion'

type Props = {}
const projects = [
  {
    id: 1,
    name: 'Netflix Clone',
    description:'Netflix clone is a Ondemand video streaming service. It is a clone of Netflix website. It is built using Nextjs,Tailwind CSS and Firebase.',
    image:'https://res.cloudinary.com/practicaldev/image/fetch/s--W8-qfz4u--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/d2db0bvcss75exc5es3d.png'
  },
  {
    id: 2,
    name: 'Instagram Clone',
    description:'Instagram clone is a social media website. It is a clone of Instagram website. It is built using MERN Stack. Here user can be able to view,like,delete,comment and create posts.',
    image:'https://user-images.githubusercontent.com/84761697/163671977-0137f943-42d0-41c4-9743-240a6ff32a11.png'
  },
  {
    id: 3,
    name: 'NFT Marketplace',
    description:'NFT Marketplace is a decentralized application. It is built using Solidity,Reactjs,Ethersjs and Hardhat. Here user can be able to create NFTs and sell them.',
    image:'https://user-images.githubusercontent.com/84761697/202507653-62aa9587-4952-4cda-a3eb-fae11b8825c7.png'
  }
]

export default function Projects({}: Props) {
  return (
    <motion.div
     initial={{opacity: 0}}
     whileInView={{opacity: 1}}
     transition={{duration: 1.5}}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[10px] text-gray-500 text-xl'>Projects</h3>
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-10'>
            {projects.map((project, i) => (
              <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                <motion.img
                 initial={{
                  y:-300,
                  opacity: 0
                 }}
                 transition={{
                  duration: 1.2
                }}
                whileInView={{
                  opacity: 1,
                  y:0
                }}
                viewport={{once:true}}
                 src={project.image}
                  alt=""
                  className='w-1/2 xl:w-1/4'
                />
                <div className='spac-y-10 px-0 md:px-10 max-w-6xl'>
                  <h4 className='text-2xl font-semibold text-center'>
                    <span className='underline decoration-[#F7AB0A]/50'>Case Study {i+1} of {projects.length}: {project.name}</span>
                    </h4>
                    <p className='text-lg text-center md:text-left'>
                    {project.description}
                    </p>
                </div>
              </div>
            ))}
        </div>
        <div className='w-full absolute top-[30%] bg-[#F7Ab0A]/10 left-0 h-[350px] -skew-y-12'>

        </div>
    </motion.div>
  )
}