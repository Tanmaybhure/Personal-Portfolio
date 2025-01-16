import {useState} from "react";
import Arrow from '../../assets/HomePage/Arrow.jsx'


const ServicesBtns=[
    {
        Number:'01',
        Heading:'Responsive Design',
        Description:'Ensure your website looks great on any device, with layouts that adapt to different screen sizes seamlessly.',
    },
    {
        Number:'02',
        Heading:'Web Designing',
        Description:'Design websites that adapt seamlessly to any device, ensuring a flawless experience across all screen sizes.',
    },
    {
        Number:'03',
        Heading:'Web Development',
        Description:'Develop attractive websites using the latest technologies, ensuring high performance, security, and a seamless user experience.',
    },
    {
        Number:'04',
        Heading:'Website Redesign',
        Description:'Refresh outdated websites with modern, appealing designs that align with current brand goals and user expectations.',
    },
]

function MyServices() {

  const [activeCard, setActiveCard] = useState(0);

  return (
    <>
      <div id="Services" className="bg-[#06080a] font-sora flex flex-col items-center md:px-3 py-24 lg:px-10 xl:p-24 w-full gap-14">
        
        <div className="flex flex-col items-center px-1  gap-4">
          <h1
            className="font-bold md:text-left text-center Hero-Title leading-[1.2]"
            style={{ fontSize: "clamp(30px, 4vw, 45px)" }}
          >
          My Quality Services{" "}
          </h1>
          <p
                style={{ fontSize: "clamp(16px, 5vw, 16px)" }}
                className=" text-center text-[#dddddd] font-light max-w-[700px]"
              >
                We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.
              </p>
        </div>

        <div className="flex flex-col w-full border-t border-[#2a1454] relative">
        <div 
          className="absolute Service-Btn h-[149px]  md:h-[105px] w-full transition-all duration-500 ease-in-out"
          style={{
            top: window.innerWidth >= 768 ? `${activeCard * 105}px` : `${activeCard * 149}px`,
            zIndex: 1,
            opacity: 0.9,
          }}
        />
        {ServicesBtns.map((data,index)=>(
                <a href="" key={index} className=" z-50 min-h-[149px] max-h-[149px] md:min-h-[105px] md:max-h-[105px] flex flex-col md:flex-row justify-between gap-2 md:gap-auto md:items-center p-7 sm:px-3 md:px-5 lg:p-7 w-full border-b border-[#2a1454] "
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={()=>setActiveCard(0)}
                >
                        <span className={`font-bold text-[#8750f7] ${activeCard ==index ? 'text-white' :''}  flex transition-all duration-1000 items-center md:w-[50%] lg:w-[40%]`} style={{ fontSize: "clamp(16px, 5vw, 20px)" }}>{data.Number} &nbsp;&nbsp; <span className="text-white" style={{ fontSize: "clamp(20px, 2.1vw, 30px)" }}>{data.Heading}</span>
                        </span>

                    <div className="flex gap-5 md:gap-12 lg:gap-28">
                        <p className={`max-w-[560px] ${activeCard ==index ? 'text-[#dddddd]' :''} `} style={{ fontSize: "clamp(12px, 1.2vw, 16px)" }}>
                              {data.Description}
                           </p>

                           <button className={`${activeCard ==index ? '-rotate-[220deg]' :''} -translate-y-[80%] sm:-translate-y-[80%] md:translate-y-0  ${activeCard ==index ? 'text-white' :''} -rotate-[125deg] text-[#8750f7] transition-all duration-500 `}> <Arrow className='w-7 h-7 ' /> </button>
                           </div>
                </a>
        ))}
        </div>


      </div>
    </>
  );
}

export default MyServices;
{/* <img src={Arrow} alt="" className="w-7 h-7 " /> */}