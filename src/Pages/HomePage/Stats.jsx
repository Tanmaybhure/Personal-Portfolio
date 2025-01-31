import React from 'react'
import CountUp from '../../Components/Animations/CountUp.jsx'
function Stats() {

const Stats=[
  {
    Number:'4',
    Text:'Years of Experience',

  },
  {
    Number:'10',
    Text:'Project Completed',

  },
  {
    Number:'5',
    Text:'Happy Clients',

  },
  {
    Number:'3',
    Text:'Corporate Clients',

  },

]

  return (
  <>
  <div className='flex flex-wrap  font-sora w-full justify-evenly py-10'>

  {Stats.map((data,index)=>(
    <span key={index} className=' font-medium flex items-center text-[#dddddd]' style={{ fontSize: "clamp(30px, 5vw, 72px)" }}> 
    <CountUp
  from={0}
  to={data.Number}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
/>+
<span className='text-lg  w-24 inline-block ml-4' style={{ fontSize: "clamp(14px, 1.5vw, 18px)" }}> {data.Text}</span></span>
) )}
  </div>
  </>
  )
}

export default Stats
