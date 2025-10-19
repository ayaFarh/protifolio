import React from 'react'

export default function About() {
    const list=[
        {
            name:"What sets me apart?",
          details:"What sets me apart is my strong commitment to excellence and continuous learning. I don’t just focus on completing tasks — I focus on creating meaningful, high-quality solutions that truly enhance user experience. My blend of technical expertise, creativity, and attention to detail allows me to turn complex ideas into clean, efficient, and visually appealing results.",
colors:{
            firstColor:"#0f0e29",
            secondColor:"#170829",
            thirdColor:"#3ea4f4"
           }
          
        },
        {
            name:"Why is this important?",
            details:"You have the data, but data alone doesn’t solve problems. I know how to use it to enhance user experience and make smart design decisions. That’s the real power of Front-End development—and it’s the extra edge I bring to every project I work on.",

            colors:{
            firstColor:"#1d0724",
            secondColor:"#24071a",
            thirdColor:"#8852b3"
           }
        },
        {
            name:"The Result",
            details:"When you and I work together, you don't just get a responsive, user-friendly website. You get a site that's built with logic, clarity, and insights—helping you understand your users better and make smarter choices for your business.",
            colors:{
            firstColor:"#0f0e29",
            secondColor:"#180929",
            thirdColor:"#0195af"
           }
        }
    ]
  return (
    <div>
        <div className='mainContainer  py-5 space-y-4'>
            <h2 className='text-3xl font-bold text-center '>About Me</h2>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-4'>
                {list.map((item,index)=>
                    <div key={index} className='p-4 rounded-xl space-y-2' style={{background: `linear-gradient(180deg, ${item.colors.firstColor}, ${item.colors.secondColor})`}}>
                        <div className='flex gap-2 items-center'><div className='w-3  h-3 transform rotate-45 ' style={{backgroundColor:item.colors.thirdColor}} > </div>
                        <h2 style={{color:item.colors.thirdColor}} className='text-2xl'>{item.name}</h2></div>
                        <p>{item.details}</p>
                    </div>
                )}

            </div>


        </div>

    </div>
  )
}
