import Image from 'next/image'
import React from 'react'
import Logo from '../images/logo.png'
import {motion} from 'framer-motion'
import {GrReactjs} from 'react-icons/gr'
import {FaNodeJs} from 'react-icons/fa'
import {SiMongodb} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import {SiMaterialui} from 'react-icons/si'

type Props = {
    cardisLeft?:boolean
}

export default function ExperienceCard({ cardisLeft}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center justify-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duriation-200 overflow-hidden'>
        <motion.div
        initial={{
            y:-100,
            opacity:0,
        }}
        transition={{
            duration:1.2,
        }}
        whileInView={{
            opacity:1,
            y:0,
        }}
        viewport={{
            once:true,
        }}
        >
        </motion.div>
        <div className='px-0 md:px-10'>
            <h4 className='text-xl font-light mt-5'>FullStack Developer Intern</h4>
            <p className='font-bold text-xl mt-1'>Project28</p>
            <div className='flex flex-row justify-between mt-5'>
                <GrReactjs className='text-[#F7Ab0A]'/>
                <FaNodeJs className='text-[#F7Ab0A]'/>
                <SiMongodb className='text-[#F7Ab0A]'/>
                <SiTailwindcss className='text-[#F7Ab0A]'/>
                <SiMaterialui className='text-[#F7Ab0A]'/>
            </div>
            <p className='uppercase py-5 text-gray-300'>june 2022 - August 2022</p>
            <ul className='list-disc space-y-4 ml-5 text-sm'>
                <li>Here I worked as a Both Frontend and Backend Developer</li>
                <li>I learned a lot from this internship</li>
                <li>How they Conduct daily scrum and weekly Retrospective meeting to konow the status of the Project</li>
                <li>I worked two months in this company</li>
                <li>Every task I took it as a challenge to improve myself in MERN stack</li>
            </ul>
        </div>
    </article>
  )
}