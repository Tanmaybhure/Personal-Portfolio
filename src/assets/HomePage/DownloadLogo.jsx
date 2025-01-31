import React from 'react'

function DownloadLogo({width=38, height=40,color='currentColor'}) {
 
return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    width={width}
    height={height}
    fill={color}
  >
    <g fill={color}>
      <path d="M20 4.583c.69 0 1.25.56 1.25 1.25v19.85a1.25 1.25 0 0 1-2.5 0V5.833c0-.69.56-1.25 1.25-1.25z"></path>
      <path d="M12.532 19.117a1.25 1.25 0 0 1 1.767-.002L20 24.8l5.7-5.685a1.25 1.25 0 1 1 1.766 1.77l-6.115 6.099c-.754.753-1.941.714-2.673.028a1.167 1.167 0 0 1-.027-.027l-6.117-6.1a1.25 1.25 0 0 1-.002-1.768z"></path>
      <path d="M5 25.05c.69 0 1.25.56 1.25 1.25v3.15a3.477 3.477 0 0 0 3.483 3.467h20.534c1.929 0 3.483-1.56 3.483-3.467V26.3a1.25 1.25 0 0 1 2.5 0v3.15c0 3.293-2.68 5.967-5.983 5.967H9.733c-3.304 0-5.983-2.674-5.983-5.967V26.3c0-.69.56-1.25 1.25-1.25z"></path>
    </g>
  </svg>
);
};

export default DownloadLogo
