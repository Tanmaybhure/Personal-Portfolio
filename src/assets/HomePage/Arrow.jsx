import React from 'react'

function Arrow({width=38, height=40,color='currentColor',className}) {
 
return (
<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={512}
    height={512}
    x={0}
    y={0}
    viewBox="0 0 24 24"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    className={className}
   
  >
    <g>
      <path
        d="M22 11H4.414l5.293-5.293a1 1 0 1 0-1.414-1.414l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L4.414 13H22a1 1 0 0 0 0-2z"
        fill={color}
        opacity={1}
        data-original="#000000"
        className=""
        cursorshover="true"
      />
    </g>
  </svg>
);
};

export default Arrow
