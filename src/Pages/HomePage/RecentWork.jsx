import React from 'react'

function RecentWork() {
  return (
   <>
   <div className='font-sora flex flex-col items-center md:px-3 !py-0 !pb-24 lg:px-10 xl:p-24 w-full gap-14'>
   <div className="flex flex-col items-center px-1  gap-4">
          <h1
            className="font-bold md:text-left text-center Hero-Title leading-[1.2]"
            style={{ fontSize: "clamp(30px, 4vw, 45px)" }}
          >
         My Recent Works{" "}
          </h1>
          <p
                style={{ fontSize: "clamp(16px, 5vw, 16px)" }}
                className=" text-center text-[#dddddd] font-light max-w-[700px]"
              >
                We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.
              </p>
        </div>
   </div>
   </>
  )
}

export default RecentWork
