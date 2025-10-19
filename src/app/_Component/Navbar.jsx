"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import PhoneMenu from './PhoneMenu';
import { navList } from '../../../Data/navList';
import { AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [phoneNav, setPhoneNav] = useState(false)


  return (
    <div className='py-4 '>
       <div className='flex justify-between mainContainer'>
         <div className='flex gap-2 items-center w-full md:w-fit justify-between'>
           <Link href={"/"} className="text-2xl font-bold bg-gradient-to-r to-primary via-purple-500 from-primary-foreground bg-clip-text text-transparent">
  Aya Farh
</Link>
         <div className='md:hidden flex text-2xl hover:text-primary-foreground transition-all duration-300 ease-in-out' onClick={()=>setPhoneNav(!phoneNav)}>
            <FaBars />
         </div>

        </div>
       {/* ul */}
       <ul className='hidden  gap-6 text-lg text-newGray relative md:flex'>
        {
            navList.map((item,index)=>
                    <li key={index} className="after:content-[''] after:w-0 hover:after:w-full after:h-[2px] after:bg-newGray after:block after:transition-all after:duration-500 ">
                        <Link href={item.link}>{item.name}</Link>
                    </li>
            )
        }
       </ul>
       <AnimatePresence>
         {phoneNav && <PhoneMenu setPhoneNav={setPhoneNav}/>}
       </AnimatePresence>
       

       </div>
    </div>
  )
}
