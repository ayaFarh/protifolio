"use client"
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { socialLinks } from '../../../Data/socialMedia';
import { motion } from 'framer-motion';
import { fadeIn } from '../_utilites/fadeIn';
import { Link as ScrollLink } from "react-scroll";
;

export default function HeroSec() {
 
  return (
    <div className='bg-black py-4 '>
    <div className='mainContainer  flex flex-col gap-2 items-center justify-between  md:flex-row '>
       <motion.div variants={fadeIn(0.3)} initial="hidden" animate="show" exit="exit" className='text-center space-y-1 flex flex-col items-center justify-center'>
       <h1 className='text-3xl max-[280px]:text-2xl font-bold'>Hi, I'm Aya Farh</h1>
      <p className='text-3xl max-[530px]:text-xl max-[1114]:text-2xl max-[1013px]:text-xl text-nowrap   max-[340px]:text-sm  bg-gradient-to-r to-secondary via-purple-500 from-primary-foreground text-transparent bg-clip-text'>Frontend Developer React Js</p>
      <p className='text-2xl max-[293px]:text-lg'>happy to see you here</p>
      {/* icons */}
      <div className='flex items-center justify-center gap-3 text-2xl '>
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className='hover:text-buttonColor transition-all duration-300 ease-in-out'
          >
            {link.icon}
          </Link>
        ))}
      </div>
     <div className='flex items-center justify-center gap-4 max-[300px]:flex-col max-[300px]:gap-2'>
       <div className='relative overflow-hidden group btn mt-2 cursor-pointer'>
        <ScrollLink
        spy={true}
        smooth={true}
        duration={500}
        to={"Contact"} className=' block cursor-pointer relative z-10' >Contact</ScrollLink>
     <div className='absolute bottom-0 left-0 right-0 z-4 w-full h-0  group-hover:h-full  bg-buttonColor transition-all duration-300 ease-in-out'></div>

      </div>
       <div  className='relative z-6  group btn mt-2 block overflow-hidden cursor-pointer' >
        <a href={"/aya_farh.pdf"}  target="_blank" 
        rel="noopener noreferrer"  className='relative z-10 ' >Resume</a>
        <div className='absolute bottom-0 left-0 right-0 z-4 w-full h-0  group-hover:h-full  bg-buttonColor transition-all duration-300 reverse'></div>
      </div>
     </div>
     </motion.div>
     {/* image */}
     <motion.div variants={fadeIn(0.3)} initial="hidden" animate="show" exit="exit">      
      <Image src="/3d-illustration-girl-with-glasses-laptop-her-hands-2.webp"
      priority
      className='' width={640} height={640} alt="avatar" />
     </motion.div>
    </div>
    </div>
  )
}
