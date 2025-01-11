import React from 'react'
import Experiance from '../../assets/Experiance_education/Experiance.svg'
import Education from '../../assets/Experiance_education/Education.svg'
import { ExperienceData } from './Experiance_EducationData'
import { EducationData } from './Experiance_EducationData'
function Experiance_Education() {


  return (
    <div className='grid md:grid-cols-2 gap-8 w-screen py-24 px-4  md:px-10 lg:px-16 xl:px-32 bg-[#06080a]'>
      
      <div className='flex flex-col gap-7'>


   
        <span   className="font-bold  flex gap-4 items-center md:text-left text-center Hero-Title leading-[1.2]"
          style={{ fontSize: "clamp(30px, 4vw, 45px)" }}><img src={Experiance} alt="" className='w-[45px] ' /> My Experience</span>
   {EducationData.slice(0,3).map((data,index)=>(
          <div key={index} className='flex flex-col gap-2 bg-inherit py-5 px-5 md:px-7  workDiv rounded-2xl md:mr-[20px]  xl:mr-[80px]  '>
            <p className='text-[#8750f7] font-sora font-bold' style={{ fontSize: "clamp(14px, 4vw, 20px)" }}>{data.Duration}</p>
            <p className='font-sora font-bold uppercase Oneline ' style={{ fontSize: "clamp(17px, 2vw, 25px)" }}>{data.Title}</p>
            <p className='Oneline'>{data.Place}</p>
            <p className='text-xs text-[#8750f7] opacity-75 font-bold'>{data.Country}</p>
          </div>
))}

 

      </div>

      <div className='flex flex-col gap-7'>

        <span  className="font-bold flex gap-4 items-center md:text-left text-center Hero-Title leading-[1.2]"
          style={{ fontSize: "clamp(30px, 4vw, 45px)" }}><img src={Education} alt="" className='w-[45px]' />My Education</span>
           
           {ExperienceData.slice(0,3).map((data,index)=>(
          <div key={index} className='flex flex-col gap-2 bg-inherit py-5 px-5 md:px-7  workDiv rounded-2xl md:mr-[20px]  xl:mr-[80px]  '>
            <p className='text-[#8750f7] font-sora font-bold' style={{ fontSize: "clamp(14px, 4vw, 20px)" }}>{data.Duration}</p>
            <p className='font-sora font-bold uppercase Oneline ' style={{ fontSize: "clamp(17px, 2vw, 25px)" }}>{data.Title}</p>
            <p className='Oneline'>{data.Place}</p>
            <p className='text-xs text-[#8750f7] opacity-75 font-bold'>{data.Country}</p>
          </div>
))}
          
          
      </div>

    </div>
  )
}

export default Experiance_Education
