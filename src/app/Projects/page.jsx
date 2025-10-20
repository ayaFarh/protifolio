import Image from 'next/image'
import React from 'react'
import ProjectCart from './_Cmoponent/ProjectCart'

export default function Projects() {
    const listOfProjects=[
        {
            name:"Style Club",
            description:"responsive e-commerce website built with React.js and Tailwind CSS. It features interactive product listings, smooth navigation, and a user-friendly shopping experience.",
            link:"https://style-club.vercel.app/",
            image:"/fashion.png",
            tecnology:["react js","Tailwind css"]
        },
        {
            name:"DotCode Portfolio",
            description:"responsive personal portfolio website built with React.js and Tailwind CSS. It showcases projects, skills, and contact information with smooth navigation and modern design.",
            link:"https://dot-code.vercel.app/",
            image:"/DOTCODE.png",
            tecnology:["react js","Tailwind css"]

        },
        {
            name:"Dashboard",
            description:"admin panel built with React.js and Tailwind CSS. It features interactive charts, user management, and real-time data updates with a clean and modern interface.",
            image:"/localhost_5174_dashboard (2).png",
            tecnology:["react js","Tailwind css"]
        },
        {
            name:"Telawa",
            description:"Quran website built with Next.js. It allows users to read, navigate, and search through the Quran with a clean interface and smooth user experience.",
            link:"https://telawa-lac.vercel.app/",
            image:"/Telawa - Google Chrome 8_5_2025 4_09_35 PM.png",
            tecnology:["Next js","Tailwind css"]
        },
        {
            name:"Qwafil",
            description:"marketing agency portfolio website built with Next.js and Tailwind CSS. It showcases services, projects, and client testimonials with modern design and smooth navigation.",
            link:"https://qawafil.netlify.app/",
            image:"/qawafil al sharq - Google Chrome 10_8_2025 9_46_24 PM.png",
            tecnology:["Next js","Tailwind css"]
        },
        {
            name:"Popit",
            description:"simple interactive game built with HTML, CSS, and JavaScript. It features clickable bubbles, fun animations, and a responsive design for an engaging user experience.",
            link:"https://ayafarh.github.io/popit/",
            image:"/popit.png",
            tecnology:["Html","Css"]
        },
        {
            name:"To Do List",
            description:"responsive task management app built with HTML, CSS, and JavaScript. It allows users to add, delete, and mark tasks as completed with a clean and interactive interface.",
            link:"https://ayafarh.github.io/to-do-list/",
            image:"/to-do-ist.png",
            tecnology:["Html","Css","Javascript"]
        },
        {
            name:"Book Mark",
            description:"responsive website built with HTML, CSS, and JavaScript. It allows users to save, access, and delete their favorite websites with a simple and interactive interface.",
            link:"https://ayafarh.github.io/book-mark/",
            image:"/bookmark.png",
            tecnology:["Html","Css","Javascript"]
        },
        {
            name:"Head Phones",
            description:"product showcase website built with HTML, CSS, and JavaScript. It features interactive product displays, smooth animations, and an intuitive interface, providing users with an engaging shopping experience.",
            link:"https://head-phones-five.vercel.app/",
            image:"/Headphone - Google Chrome 12_2_2024 3_43_02 PM.png",
            tecnology:["Html","Css","Javascript"]

        },
        {
            name:"Salla",
            description:"e-commerce platform built with React.js and Tailwind CSS. It features product listings, shopping cart, secure checkout, and a user-friendly interface for a seamless online shopping experience.",
            link:"https://salla-app-seven.vercel.app/",
            image:"/Salla - Google Chrome 5_16_2025 11_25_33 PM.png",
            tecnology:["react js","Tailwind css"]
        }

    ]
  return (
    <div className='mainContainer py-5 space-y-3'>
        <div className='text-center space-y-3'>
            <h3 className='text-3xl'>Featured Projects</h3>
            <p className='text-newGray'>A comprehensive toolkit for creating data-driven, responsive web applications</p>
        </div>
   {/* project div */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
           {listOfProjects.map((item,index)=>(
            <ProjectCart key={index} product={item} index={index}/>
           ))}
        </div>
    </div>
  )
}
