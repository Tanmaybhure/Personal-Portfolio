import React from "react";
import SecondaryBtn from "../../Components/SharedComponent/Buttons/SecondaryBtn";
import DownloadLogo from "../../assets/HomePage/DownloadLogo.jsx";
import Gajju from "../../assets/HomePage/profile.svg";
import {  Instagram, Linkedin, Github } from "lucide-react";

function Introduction() {
  return (
    <>
      <div className="relative flex flex-col items-start  pt-20 pb-20 w-full lg:max-w-[900px]  xl:max-w-[1220px] 2xl:max-w-[1320px]  mx-auto  ">
      

      <svg viewBox="0 0 1320 300" className="animate-stroke hidden md:block">
        <text x="50%" y="50%" textAnchor="middle" className="svgtext">
          HI        </text>
      </svg>


      <div className="blur"/>
        <div className="flex flex-col md:items-end items-center p-4 md:p-10 lg:items-start justify-between xl:px-6 xl:pr-28 h-fit w-full md:flex-row">
          {/* {from here to */}
          <div className="flex  items-center md:items-start gap-4 flex-col w-[90vw] md:w-[40vw] xl:w-[37vw]">
            <div>
              <h3
                className="font-bold md:text-left text-center"
                style={{ fontSize: "clamp(20px, 4vw, 36px)" }}
              >
                I am Tanmay Bhure
              </h3>
            </div>

            <div>
              <h1
                className="font-bold md:text-left text-center Hero-Title leading-[1.2]"
                style={{ fontSize: "clamp(30px, 4vw, 69px)" }}
              >
                Web Developer + Software Developer{" "}
              </h1>
            </div>

            <img
              src={Gajju}
              alt="Profile"
              className=" max-h-[90%] max-w-[90%] flex md:hidden  my-4  -top-6  duration-500 transition-all rounded-[40px] rotate-[4deg] border-[2px] hover:rotate-0 hover:border-[#8750f7] border-[#2a1454] "
            />

            <div>
              <p
                style={{ fontSize: "clamp(16px, 1.8vw, 20px)" }}
                className="max-w-[550px] md:text-left text-center text-[#dddddd] font-light"
              >
                I break down complex user experinece problems to create
                integritiy focussed solutions that connect Numbers of people
              </p>
            </div>

            <div className="flex items-center justify-center md:justify-normal flex-wrap lg:flex-nowrap lg:w-auto w-3/4 gap-6 lg:mt-5 xl:mt-10">
              <SecondaryBtn className={"!items-start hover:bg-[#8750f7] text-[17px] font-normal !leading-[21px]"}>
                {" "}
                {"Download Resume"} <DownloadLogo height={18} width={18} />
              </SecondaryBtn>
              <SecondaryBtn Link='https://www.instagram.com/tanmay_bhure/' className="ml-[6vw] sm:ml-0 w-fit second relative overflow-hidden  rounded-full !py-2 !px-2 h-fit">
                <Instagram size={20} />
              </SecondaryBtn>
              <SecondaryBtn Link='https://github.com/Tanmaybhure' className="w-fit second relative overflow-hidden  rounded-full !py-2 !px-2 h-fit">
                <Github  size={20} />
              </SecondaryBtn>
              <SecondaryBtn Link='https://www.linkedin.com/in/tanmay-bhure/' className="mr-[6vw] sm:mr-0 w-fit second relative overflow-hidden  rounded-full !py-2 !px-2 h-fit">
                <Linkedin  size={20} />
              </SecondaryBtn>
            </div>
          </div>
          {/* to here is intro text and btn */}
          <div className="blur !bottom-0 !top-auto left-[49%] !w-[230px] !h-[230px]"/>
         
            <img
              src={Gajju}
              alt="Profile"
              className=" md:!max-w-[360px] md:flex hidden md:max-h-[360px] lg:!max-w-[400px] lg:!max-h-[400px]   xl:!max-w-[460px]  relative  xl:!max-h-[460px]  -top-6  duration-500 transition-all rounded-[40px] rotate-[4deg] border-[2px] hover:rotate-0 hover:border-[#8750f7] border-[#2a1454] "
            />
          </div>
        

       
      </div>
    </>
  );
}

export default Introduction;
