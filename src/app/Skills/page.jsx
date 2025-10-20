import React from 'react'
import { LuBrainCog } from "react-icons/lu";
import { IoCodeOutline } from "react-icons/io5";
import { FaCodeBranch } from "react-icons/fa6";
import { VscSymbolColor } from "react-icons/vsc";
import { LuDot } from "react-icons/lu";



export default function Skills() {
    const listOfSkills=[
        {
            name:"Frontend Development",
            icon:<IoCodeOutline />,
            colors:{
                firstColor:"#3f1741",
                secondColor:"#190819",
                thirdColor:"#c14ae8"
        },

            details:[
                {
                    name:"HTML",
                   
                },
                {
                    name:"CSS",
                    
                },
                {
                    name:"Tailwind CSS",
                    
                },
                {
                    name:"Bootstrap",
                },
                {
                    name:"JavaScript",
                    
                },
                {
                    name:"React",
                    
                },
                {
                    name:"Next.js",
                    
                },
            ]
        },
        {
            name:"Development Workflow",
            icon:<FaCodeBranch />,
            colors:{
                firstColor:"#05382b",
                secondColor:"#041413",
                thirdColor:"#00925d"
        },
            details:[
                {
                    name:"Git",
                    
                },
                {
                    name:"GitHub",
                    
                },
                {
                    name:"Vs Code",
                    
                },
            ]
        },
        {
            name:"Design & UI",
            icon:<VscSymbolColor />,
            colors:{
                firstColor:"#0e294f",
                secondColor:"#05101c",
                thirdColor:"#0061ff"
        },
            details:[
                {
                    name:"Responsive Design",
                    
                },
                {
                    name:"Figma to Code",
                    
                },
                {
                    name:"Interactive UI",
                    
                },
            ]
        },
        {
            name:"Soft Skills",
            icon:<LuBrainCog />,
             colors:{
                firstColor:"#481709",
                secondColor:"#1a0705",
                thirdColor:"#ff6100"
        },
            details:[
                {
                    name:"Active Listener",
                    
                },
                {
                    name:"Problem Solving",
                    
                },
                {
                    name:"Dealdline Mangement",
                    
                },
                {
                    name:"Analytical Thinking",
                    
                },
                {
                    name:"Fast Learner",
                    
                },
            ]
        },

    ]
  return (
    <div className='bg-[#05080e] py-5'>
      <div className='w-[70%] mx-auto space-y-4   '>
   <div className='flex flex-col space-y-3 items-center justify-center'>
     <h2 className='text-3xl max-[377px]:text-xl text-center font-bold'>Skills & Expertise</h2>
    <p className='text-newGray max-[377px]:text-sm text-center'>A comprehensive toolkit for creating data-driven, responsive web applications</p>
   </div>
{/* main content */}
    <div>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full' >
    {
        listOfSkills.map((item,index)=>
       <div key={index} style={{ backgroundColor:item.colors.secondColor,borderColor:item.colors.firstColor}} className='relative hover:scale-105 transition-all duration-300 p-4 border-2 space-y-2 rounded-xl'>
        <div className='absolute top-0 right-0 w-9 h-8  rounded-tr-lg rounded-bl-lg' style={{backgroundColor:item.colors.firstColor}}></div>
        <p className='w-fit p-3 rounded-xl' style={{ backgroundColor: item.colors.thirdColor,
      color: "#fff",
      fontSize: "24px",
      textAlign: "center",
    }}>{item.icon}</p>
        <h2 style={{color:item.colors.thirdColor}} className=''>{item.name}</h2>
        <div>
            {
                item.details.map((detail,index)=>
                <p key={index} className=''><LuDot className='inline-block text-2xl' style={{color:item.colors.thirdColor}} />{detail.name}</p>
                )
            }
        </div>
       </div>
        )
    }
     </div>
    </div>
      </div>
    </div>
  )
}
