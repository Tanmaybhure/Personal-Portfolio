import React,{useState,useRef,useEffect} from 'react'

function RecentWork() {

const WorkBtn=['All','UI/UX','Web Development','Web Redesign']

  const [activeButton, setactiveButton] = useState(0);
  const activeButtonRef = useRef(null);
  const [buttonWidth, setButtonWidth] = useState(77);

  useEffect(() => {
    if (activeButtonRef.current) {
      const width = activeButtonRef.current.getBoundingClientRect().width;
      setButtonWidth(width);
    }
  }, [activeButton]);

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

        <div className='flex relative rounded-full bg-black'>
      <div 
          className="absolute Service-Btn rounded-full z-1  h-[48px] transition-all duration-500 ease-in-out"
          style={{
            left: `${activeButton * buttonWidth}px` ,
            width: `${buttonWidth}px`,
            opacity: 0.9,
          }}
        /> 

        {WorkBtn.map((Title,index)=>(
          <button key={index} className='flex justify-center items-center p-3 px-7  z-50 bg-transparent' 
          onClick={() => setactiveButton(index)} 
          ref={activeButton === index ? activeButtonRef : null}>
            {Title}</button>
        ) )}
          {/* <button className='flex justify-center items-center p-4 px-7 max-w-[102px] max-h-[56px] z-50 bg-transparent'>UI/UX</button>
          <button className='flex justify-center items-center p-4 px-7 max-w-[207px] max-h-[56px] z-50 bg-transparent'>Web Development</button>
          <button className='flex justify-center items-center p-4 px-7 pr-9 max-w-[181px] max-h-[56px] z-50 bg-transparent'>Web Redesign</button> */}
        
        </div>

   </div>
   </>
  )
}

export default RecentWork
