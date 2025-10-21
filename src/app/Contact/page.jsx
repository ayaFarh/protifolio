import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { TbBrandUpwork } from "react-icons/tb";
import { CiMail } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";





export default function Contact() {
    const contactList=[
        { 
            name:"Email",
            text:"Let's discuss your project",
            icon:<CiMail />,
            link:"mailto:farhaya004@gmail.com",
            linkText:"Send Email",
             colors:{
                firstColor:"#0e294f",
                secondColor:"#05101c",
                thirdColor:"#0061ff"
        },
        },
        { 
            name:"Upwork",
            text:"Hire me on upwork",
            icon:<TbBrandUpwork />,
            link:"https://www.upwork.com/freelancers/~016680178313f48b29",
            linkText:"View profile",
            colors:{
                firstColor:"#05382b",
                secondColor:"#041413",
                thirdColor:"#00925d"
        },
        },
        { 
            name:"WhatsApp",
            text:"Text me about your project",
            icon:<FaWhatsapp />,
            link:"https://wa.me/201019623279",
            linkText:"Text Me",
             colors:{
                firstColor:"#033238",
                secondColor:"#031013",
                thirdColor:"#0db3ba"
        },
            
        },
        { 
            name:"Linkedin",
            text:"Connect Professionally",
            icon:<CiLinkedin />,
            link:"https://www.linkedin.com/in/aya-mohamed-farh",
            linkText:"Connect",
             colors:{
                firstColor:"#0e294f",
                secondColor:"#05101c",
                thirdColor:"#0061ff"
        },
        },

    ]
  return (
    <div className='bg-gradient-to-b from-black to-[#0f051a] py-7 w-full' id='Contact'>
        <div className='mainContainer  space-y-3  '>
           <div className='text-center space-y-3'>
             <h3 className='text-3xl'>Let's Work Together</h3>
            <p className='text-newGray'>Ready to create something amazing? I'm available for freelance projects and always excited to take on new challenges.</p>
           </div>
    {/* main div */}

    <div className='grid max-[570px]:grid-cols-1 max-[765px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full'>
        {contactList.map((item,index)=>(
            <div key={index} className='relative p-4 rounded-lg space-y-1 hover:scale-105 transition-all duration-300 ease-in-out' style={{backgroundColor:item.colors.secondColor}} >
                <div className='absolute top-0 right-0 w-6 h-6 rounded-tr-lg rounded-bl-xl' style={{backgroundColor:item.colors.firstColor}}></div>
                <div className='p-1 rounded-lg w-fit text-3xl' style={{backgroundColor:item.colors.thirdColor}}>{item.icon}</div>
                 <h3 className='' style={{color:item.colors.thirdColor}}>{item.name}</h3>
                 <p className='text-newGray'>{item.text}</p>
                 <div>
                 <a href={item.link} target="_blank" rel="noopener noreferrer" className=' hover:underline transition-all duration-300 ease-in-out'>{item.linkText}<MdArrowOutward className="text-newGray mb-2 text-xl inline-block"/></a>
                 </div>
                
            </div>

        ))}
    </div>
        </div>
    </div>
  )
}
