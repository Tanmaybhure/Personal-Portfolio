import React from 'react'
import HeroCover from '../../assets/HeroCover.svg'

function HeroOtherPages({Title,Path,Subpath}) {
  return (
    <div className='w-screen flex font-sora min-h-[340px] lg:min-h-[480px] top-0 -translate-y-1/2 relative z-50 overflow-hidden bg-black bg-center bg-no-repeat bg-cover  ' style={{backgroundImage:`url(${HeroCover})`}}>
      {/* <img src={HeroCover} alt="" className=' object-fill  opacity-50' /> */}


   <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 z-50  flex flex-col items-center justify-center gap-0'>
      <h1 className='text-white text-[50px] font-bold'>{Title}</h1>
      <p className='text-white text-lg font-medium '>{Path} &nbsp;  / &nbsp;{Subpath}</p>
      </div>

    </div>
  )
}

export default HeroOtherPages
