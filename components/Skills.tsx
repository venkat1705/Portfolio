import React from 'react'
import {motion} from 'framer-motion'

type Props = {
    directionLeft?: boolean
}

const imagesArray = [
    {
        image:'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
        percentage: 90
    },
    {
        image:'https://cdn.worldvectorlogo.com/logos/react-2.svg',
        percentage: 90
    },
    {
        image:'https://cdn.worldvectorlogo.com/logos/html-1.svg',
        percentage: 80
    },
    {
        image:'https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg',
        percentage: 80
    },
    {
        image:'https://seeklogo.com/images/B/blockchain-logo-A0FE252BA6-seeklogo.com.png',
        percentage: 80
    },
    {
        image:'https://seeklogo.com/images/P/python-logo-A32636CAA3-seeklogo.com.png',
        percentage: 90
    },
    {
        image:'https://cdn.worldvectorlogo.com/logos/c.svg',
        percentage: 70
    },
    {
        image:'https://www.svgrepo.com/show/303206/javascript-logo.svg',
        percentage: 90
    },
    {
        image:'https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_96102ac6497377cd53da621075fe828e/sanity.png',
        percentage: 80
    },
]

export default function Skills({ directionLeft }: Props) {
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
    className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[200px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[10px] text-gray-500 text-xl'>Skills</h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
            Hover over a skill
        </h3>
        <div >
        <div className='relative grid grid-cols-4 gap-20 cursor-pointer mt-20'>
        {
            imagesArray.map((item,i) => (
                <div className='group flex'>
                <motion.img
            initial={{
                x:directionLeft ? -200 : 200,
                opacity:0,
            }}
            transition={{
                duration:1,
            }}
            whileInView={{
                opacity:1,
                x:0,
            }}
            src={item.image}
            alt="sanity"
            style={{
                maxHeight: "100px",
                maxWidth: "100px",
              }}
              className='rounded-full border w-14 h-14 border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out'
           />
           <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white rounded-full z-0 w-14 h-14'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-xl font-bold text-black opacity-100'>{item.percentage}</p>
            </div>
           </div>
           </div>
            )
        )}
    </div>
        </div>
    </motion.div>
  )
}