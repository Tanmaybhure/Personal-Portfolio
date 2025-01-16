import React from 'react'

function PrimaryBtn({Text,className, onClick}) {
  return (
    <>
    <button onClick={onClick} className={`PrimaryBtnGredient ${className} transition-all duration-500 font-bold py-[12.25px] px-[35px] rounded-[50px]  h-fit w-fit`} style={{ fontSize: "clamp(12px, 1.3vw, 16px)" }}>{Text}</button>
    </>
  )
}

export default PrimaryBtn
