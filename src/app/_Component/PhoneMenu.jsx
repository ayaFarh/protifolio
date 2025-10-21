
"use client"
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { IoMdClose } from "react-icons/io";
import { navList } from '../../../Data/navList';
import { socialLinks } from '../../../Data/socialMedia';
import {motion} from 'framer-motion'
import { Link as ScrollLink } from "react-scroll";
import { usePathname } from 'next/navigation';
 

export default function PhoneMenu({setPhoneNav}) {
  const pathname = usePathname()
    const menuRef = useRef(null);
    useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
    useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setPhoneNav(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setPhoneNav]);
   
 
  return (
    <motion.div
    ref={menuRef}
    initial={{x:"100%"}}
    animate={{x:"0%"}}
    exit={{x:"100%"}}
    transition={{duration:0.5}}
   
    className='fixed top-0 right-0 bottom-0 md:hidden z-[9999]  py-4 bg-black px-3 w-64  items-center flex-col'> 
        <div className='cursor-pointer w-[70%] mx-auto ' onClick={()=>setPhoneNav(false)}>
            <IoMdClose className='text-2xl ml-auto text-white hover:text-primary-foreground transition-all duration-300 ease-in-out' />
        </div>
         <ul className='fixed top-10 right-0 bottom-0  flex   gap-6  w-64 text-lg text-newGray  items-center justify-center flex-col'>
        {
            navList.map((item,index)=>
                    <li key={index} className="after:content-[''] cursor-pointer after:w-0 hover:after:w-full after:h-[2px] after:bg-newGray after:block after:transition-all after:duration-500 ">
                  {pathname === "/" ? (
                <ScrollLink
                  to={item.link}
                  smooth={true}
                  duration={500}
                  spy={true}
                  onClick={()=> setPhoneNav(false)}
                  
                >
                  {item.name}
                </ScrollLink>
              ) : (
                <Link
                 onClick={()=> setPhoneNav(false)}
                
                href={`/#${item.link}`}>{item.name}</Link>
              )}
                    </li>
            )
        }
       </ul>

       
       </motion.div>
  )
}
