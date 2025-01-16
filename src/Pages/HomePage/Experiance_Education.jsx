import React,{useState} from 'react'
import Experiance from '../../assets/Experiance_education/Experiance.svg'
import Education from '../../assets/Experiance_education/Education.svg'
import { ExperienceData } from '../../Data/Experiance_EducationData'
import { EducationData } from '../../Data/Experiance_EducationData'
function Experiance_Education() {
 const [isHoveredIndex, setisHoveredIndex] = useState(null);
    const [isHoveredIndexEX, setisHoveredIndexEX] = useState(null);

  return (
    <div id='Experience_&_Education' className='grid md:grid-cols-2 gap-8 w-screen py-24 px-4  md:px-10 lg:px-16 xl:px-32 bg-[#06080a]'>
      
      <div className='flex flex-col gap-7'>


   
        <span   className="font-bold  flex gap-4 items-center md:text-left text-center Hero-Title leading-[1.2]"
          style={{ fontSize: "clamp(30px, 4vw, 45px)" }}><img src={Experiance} alt="" className='w-[45px] ' />My Education </span>
   {EducationData.slice(0,3).map((data,index)=>(
          <div
          onMouseEnter={() => setisHoveredIndex(index)}
          onMouseLeave={() => setisHoveredIndex(null)}
           key={index} className='flex flex-col gap-2 bg-inherit py-5 px-5 md:px-7 overflow-hidden group cursor-pointer workDiv rounded-2xl md:mr-[20px]  xl:mr-[80px]  '>
            <div className='w-full h-full absolute top-0 left-0 z-0 opacity-0 group-hover:opacity-100 HoverDiv transition-all duration-1000 '></div>
            <p className='text-[#8750f7] transition-all duration-1000 group-hover:text-white font-sora font-bold z-10' style={{ fontSize: "clamp(14px, 4vw, 20px)" }}>{data.Duration}</p>
            <p className={`font-sora font-bold uppercase ${isHoveredIndex === index ? "" : "Oneline"}  z-10 `} style={{ fontSize: "clamp(17px, 2vw, 25px)" }}>{data.Title}</p>
            <p className={`${isHoveredIndex === index ? "" : "Oneline"} z-10`}>{data.Place}</p>
            <p className='text-xs text-[#bdbdbd] transition-all duration-1000 group-hover:text-white font-bold z-10'>{data.Country}</p>
          </div>
))}

 

      </div>

      <div className='flex flex-col gap-7'>

        <span  className="font-bold flex gap-4 items-center md:text-left text-center Hero-Title leading-[1.2]"
          style={{ fontSize: "clamp(30px, 4vw, 45px)" }}><img src={Education} alt="" className='w-[45px]' />My Experience</span>
           
           {ExperienceData.slice(0,3).map((data,index)=>(
         <div
         onMouseEnter={() => setisHoveredIndexEX(index)}
         onMouseLeave={() => setisHoveredIndexEX(null)}
         key={index} className='flex flex-col gap-2 bg-inherit py-5 px-5 md:px-7 overflow-hidden group cursor-pointer workDiv rounded-2xl md:mr-[20px]  xl:mr-[80px]  '>
         <div className='w-full h-full absolute top-0 left-0 z-0 opacity-0 group-hover:opacity-100 HoverDiv transition-all duration-1000 '></div>
         <p className='text-[#8750f7] transition-all duration-1000 group-hover:text-white font-sora font-bold z-10' style={{ fontSize: "clamp(14px, 4vw, 20px)" }}>{data.Duration}</p>
         <p className={`font-sora font-bold uppercase ${isHoveredIndexEX === index ? "" : "Oneline"} z-10 `} style={{ fontSize: "clamp(17px, 2vw, 25px)" }}>{data.Title}</p>
         <p className={`${isHoveredIndexEX === index ? "" : "Oneline"} z-10`}>{data.Place}</p>
         <p className='text-xs text-[#bdbdbd] transition-all duration-1000 group-hover:text-white font-bold z-10'>{data.Country}</p>
       </div>
))}
          
          
      </div>

        <div className='flex justify-center  xl:-translate-x-9 col-span-full '>
          <a href="About/#Resume" className='text-[#8750f7] hover:text-[#9e77ec] transition-colors duration-500 '>View All...</a>
        </div>

    </div>
  )
}

export default Experiance_Education
