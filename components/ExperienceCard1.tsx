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
            <h4 className='text-xl font-light mt-5'>Cyber Security Intern</h4>
            <p className='font-bold text-xl mt-1'>Indian Servers</p>
            <div className='flex flex-row justify-between mt-5'>
            </div>
            <p className='uppercase py-5 text-gray-300'>june 2021 - August 2021</p>
            <ul className='list-disc space-y-4 ml-5 text-sm'>
                <li>I learned a lot from my internship about the cybersecurity.</li>
                <li>cybersecurity. I am very
enthusiastic in learning about malware and how to detect the
malware</li>
                <li>specifically learned about the Web Hacking through out
my internship</li>
            </ul>
        </div>
    </article>
  )
}