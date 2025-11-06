
import React from 'react'
import ProjectCart from './_Component/ProjectCart'
import { ProjectInfo } from '../../../Data/ProjectsInfo'

export default function Projects() {
   
  return (
    <div className='mainContainer py-5 space-y-3' id='Projects'>
        <div className='text-center space-y-3'>
            <h3 className='text-3xl'>Featured Projects</h3>
            <p className='text-newGray'>A comprehensive toolkit for creating data-driven, responsive web applications</p>
        </div>
   {/* project div */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
           {ProjectInfo.map((item,index)=>(
            <ProjectCart key={index} product={item} index={index}/>
           ))}
        </div>
    </div>
  )
}
