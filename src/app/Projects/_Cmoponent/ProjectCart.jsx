import Image from 'next/image'
import React from 'react'
import { colorPlate } from '../../../../Data/ColorPalet'
import Link from 'next/link'
import { BsBoxArrowUpRight } from "react-icons/bs";


export default function ProjectCart({product,index}) {
  const colors = colorPlate[index % colorPlate.length]

  return (
    <div className='relative p-4 rounded-lg space-y-3 group' style={{backgroundColor:colors.secondColor}}>
      <div className='bg-black/40 h-49 w-full absolute top-0 left-0 bottom-0 right-0 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out'>
          <div className='flex w-full items-center h-full justify-center '>
           {product.link &&  <Link href={product.link ||""}  className='p-3 rounded-full  flex items-center justify-center bg-newGray/80'>
              <BsBoxArrowUpRight className='  ' />
            </Link>}
          </div>
      </div>
      <div className="w-full h-45 relative group rounded-lg overflow-hidden">
        
  <Image
    src={product.image}
    alt={product.name}
    fill
    className="object-cover"
  />
</div>
        <h3 className='text-2xl ' style={{color:colors.thirdColor}}>{product.name}</h3>
        <p className='text-sm text-newGray'>{product.description}</p>
        <div className='flex gap-2 flex-wrap'>
          {product.tecnology.map((item, index) => (
            <p
              key={index}
              className='py-1 px-3 rounded-full text-sm bg-[#1e2939] text-gray-300'
              
            >
              {item}
            </p>
          ))}
        </div>
        <div>
          <div className='text-newGray '>
  {product.link ? (
    <Link href={product.link} className='underline hover:text-white transition-all duration-300 ease-in-out'>
        Live Demo
    </Link>
  ) : (
    "No Demo"
  )}
</div>
        </div>
        
    </div>
  )
}
