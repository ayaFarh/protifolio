import Link from 'next/link'
import React from 'react'

export default function Interested() {
  return (
    <div className='py-5'>
        <div className='mainContainer text-center space-y-4 p-4 border border-[#344454] rounded-xl bg-gradient-to-t  from-[#0e041a] to-[#010103] '>
            <p className='text-3xl max-[590px]:text-2xl max-[498px]:text-xl max-[428px]:text-lg max-[385px]:text-sm'>Interested in Working Together?</p>
        <p className='text-newGray max-[385px]:text-sm'>I'm always excited to take on new challenges and create innovative solutions. Let's discuss how I can help bring your project to life!</p>
        <div className='w-full flex flex-row max-[528px]:flex-col items-center justify-center gap-3'>
            <Link href={"https://github.com/AyaFarh"} className='btn min-w-[200px] bg-linear-to-l  from-[#8f31fc] to-[#4b73ff] border-0 hover:scale-105 ' >View More In GitHup</Link>
            <a
            
            
            href={"#Contact"} className='btn min-w-[200px] border-newGray hover:bg-[#0f1c2e] hover:text-white hover:border-[#295282]' >Let’s collaborate</a>
        </div>
        </div>
    </div>
  )
}
