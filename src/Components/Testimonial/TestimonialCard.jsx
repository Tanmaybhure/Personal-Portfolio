import React from "react";
import MagnifyxLogo from '../../assets/Testimonials/MagnifyxLogo.svg'
import Client from '../../assets/Testimonials/client.svg'
import Comma from '../../assets/Testimonials/Comma.svg'
const TestimonialCard = ({Client,Logo,Review,Name,Position}) => {
  return (
        <>
          <div className=" flex flex-col  rounded-lg bg-[#140c1c] p-6 w-[300px] lg:ml-7 mx-auto mb-7">
            <div className="flex items-start justify-between mb-5">
            <img src={Logo} alt="" className="w-28" />

            <img src={Client} alt="" className="w-28 rounded-md" />
            </div>

            <img src={Comma} alt="" className="w-14 mb-5 rounded-md" />
            <div className="flex flex-col gap-4 mb-10">
              <p className="max-w-[260px]">“{Review}”</p>
            </div>

            <div className="flex flex-col">
              <p className="font-bold text-lg">{Name}</p>
              <p className="text-sm">{Position}</p>
            </div>
              
          </div>
        </>
  );
};

export default TestimonialCard;
