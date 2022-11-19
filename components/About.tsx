import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import profile from '../images/profile.png'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
    initial={{
        opacity:0,
    }} 
    whileInView={{
        opacity:1,
    }}
    transition={{
        duration:1.5,
    }}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[10px] text-gray-500 text-xl'>About</h3>
        <motion.img 
        initial={{
            x:-200,
            opacity:0,
        }}
        whileInView={{
            opacity:1,
            x:0,
        }}
        viewport={{
            once:true,
        }}
        transition={{
            duration:1.2,
        }}
        src="https://avatars.githubusercontent.com/u/84761697?v=4"
        className='md:w-56 h-56 rounded-full object-cover mt-20'
        />
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-xl font-semibold mb-30'>Little Background</h4>
            <p className='text-base'>
                I am a Full Stack Developer and a Competitive Programmer. I am currently pursuing my Bachelors in Computer Science and Engineering at KL University, Vijayawada. I am a self taught developer and I am always looking for new opportunities to learn and grow. I am a Web3 Enthusiast and Blockchain Follower.I am very passionate about Blockchain Development and I love to create new things.
            </p>
        </div>
    </motion.div>
  )
}