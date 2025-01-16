import React,{useState} from "react";
import { GraduationCap } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { EducationData } from "../../Data/Experiance_EducationData";
import { ExperienceData } from "../../Data/Experiance_EducationData";

function EAndEAbout() {
    const [ShowMoreEdu, setShowMoreEdu] = useState(3);
    const [ShowMoreEx, setShowMoreEx] = useState(3);
    const [isHoveredIndex, setisHoveredIndex] = useState(null);
    const [isHoveredIndexEX, setisHoveredIndexEX] = useState(null);
    

    const handleShowMore = () => {
        if(ShowMoreEdu === EducationData.length && ShowMoreEx === ExperienceData.length){
            setShowMoreEdu(3);
            setShowMoreEx(3);
        }
            else{
                setShowMoreEdu(EducationData.length);
                setShowMoreEx(ExperienceData.length);
    }
    };

  return (
    <>
      <div id="Resume" className="bg-[#06080a] py-24 grid grid-cols-1 md:grid-cols-2 w-screen  justify-items-center -translate-y-80 px-10 xl:px-28 ">
      <h1
          className="font-bold col-span-full mb-16  text-center Hero-Title leading-[1.2]"
          style={{ fontSize: "clamp(30px, 4vw, 45px)" }}
        >
          My Resume
        </h1>
        <div className="flex flex-col gap-14 mb-10 md:mr-10 xl:mr-20 ">
           <span  className="font-medium  md:text-left text-center  leading-[1.2]"
                    style={{ fontSize: "clamp(30px, 4vw, 40px)" }}>Education</span>
          <div className="border-l pl-7 flex flex-col gap-10">
            {EducationData.slice(0, ShowMoreEdu).map((data, index) => (
              <div
                key={index}
                onMouseEnter={() => setisHoveredIndex(index)}
                onMouseLeave={() => setisHoveredIndex(null)}
                className="dabba relative cursor-pointer flex items-start gap-5"
              >
                <div className="bg-[#2a1454] -translate-y-5 p-4 rounded-full">
                  <GraduationCap />
                </div>
                <div className="flex -translate-y-5 flex-col gap-1">
                  <p
                    className="text-[#8750f7] transition-all duration-1000 group-hover:text-white font-sora font-bold z-10"
                    style={{ fontSize: "clamp(14px, 4vw, 20px)" }}
                  >
                    2022-2024
                  </p>
                  <p
                    className={`font-sora font-bold uppercase ${isHoveredIndex === index ? "" : "Oneline"}  z-10 `}
                    style={{ fontSize: "clamp(17px, 2vw, 25px)" }}
                  >
                    {data.Title}
                  </p>
                  <p className={`${isHoveredIndex === index ? "" : "Oneline"} z-10`}>{data.Place}</p>
                  <p className="text-xs text-[#bdbdbd] transition-all duration-1000 group-hover:text-white font-bold z-10">
                    {data.Country}
                  </p>
                </div>
              </div>
            ))}
          </div>
         
        </div>

        <div className="flex flex-col gap-14 md:ml-16 xl:ml-28 ">
           <span  className="font-medium  md:text-left text-center  leading-[1.2]"
                    style={{ fontSize: "clamp(30px, 4vw, 40px)" }}>Experiance</span>
          <div className="border-l pl-7 flex flex-col gap-10">
            {ExperienceData.slice(0, ShowMoreEx).map((data, index) => (
              <div
              onMouseEnter={() => setisHoveredIndexEX(index)}
              onMouseLeave={() => setisHoveredIndexEX(null)}
                key={index}
                className="dabba relative cursor-pointer flex items-start gap-5"
              >
                <div className="bg-[#2a1454] -translate-y-5 p-4 rounded-full">
                  <BriefcaseBusiness />
                </div>
                <div className="flex -translate-y-5 flex-col gap-1">
                  <p
                    className="text-[#8750f7] transition-all duration-1000 group-hover:text-white font-sora font-bold z-10"
                    style={{ fontSize: "clamp(14px, 4vw, 20px)" }}
                  >
                    2022-2024
                  </p>
                  <p
                    className={`font-sora font-bold uppercase ${isHoveredIndexEX === index ? "" : "Oneline"} z-10 `}
                    style={{ fontSize: "clamp(17px, 2vw, 25px)" }}
                  >
                    {data.Title}
                  </p>
                  <p className={`${isHoveredIndexEX === index ? "" : "Oneline"} z-10`}>{data.Place}</p>
                  <p className="text-xs text-[#bdbdbd] transition-all duration-1000 group-hover:text-white font-bold z-10">
                    {data.Country}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
        <button onClick={handleShowMore} className="col-span-full transition-colors duration-500 text-[#8750f7] hover:text-[#9e77ec] mt-10">
        {ShowMoreEdu === EducationData.length && ShowMoreEx === ExperienceData.length ? "Show Less" : "Show More"}

        </button>
      </div>
    </>
  );
}

export default EAndEAbout;
