import React from 'react'
import {PhoneIcon,MapPinIcon,EnvelopeIcon} from '@heroicons/react/24/solid'


type Props = {}

export default function ContactMe({}: Props) {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[10px] text-gray-500 text-xl'>Contact</h3>
        <div className='flex flex-col space-y-10'>
            <h4 className='text-2xl font-semibold text-center'>
                I have got What u Need .{" "}
                <span className='decoration-[#F7AB0A]/50 underline'>Let's Talk</span>
                </h4>
        <div className='space-y-10'>
           <div className='flex items-center space-x-5 justify-center'>
           <PhoneIcon className='text-[#f7AB0A] h-7 w-7 animate-bounce'/>
           <p>+91 9347653480</p>
           </div>

           <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#f7AB0A] h-7 w-7 animate-bounce'/>
            <p className='text-sm xl:text-xl'>venkataramireddyvenky@gmail.com</p>
           </div>

           <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#f7AB0A] h-7 w-7 animate-bounce'/>
            <p className='text-sm xl:text-xl'>Manjeera Monarch,Near TDP office,Mangalagiri,Vijayawada .</p>
           </div>
        </div>

        
        </div>
    </div>
  )
}