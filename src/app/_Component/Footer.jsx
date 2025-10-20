import React from 'react'
import { BsDot } from "react-icons/bs";


export default function Footer() {
  return (
    <div className='py-10 text-center flex flex-col items-center '>
        <h2 className="text-2xl font-bold bg-gradient-to-r to-primary via-purple-500 from-primary-foreground bg-clip-text text-transparent">Aya Farh</h2> 
        <p className='text-newGray max-[315px]:text-sm'><BsDot className="text-3xl  max-[315px]:text-lg inline-block text-success"/>Ready to bring your projects to life<BsDot className="text-3xl inline-block max-[315px]:text-lg text-primary-foreground"/></p>

    </div>
  )
}