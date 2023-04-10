import React, { type ReactElement, type SVGProps } from 'react'

const HomeIcon = ({ 
  className,
  height,
  width,
  fill = "none",
  stroke = "currentColor",
  strokeWidth = 1.5,
  onClick
}: SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={className} onClick={onClick} height={height} width={width} fill={fill} stroke={stroke} strokeWidth={strokeWidth}>
      <path 
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M416 174.74V48h-80v58.45L256 32 0 272h64v208h144V320h96v160h144V272h64l-96-97.26z"
        />
    </svg>
  )
}

export default HomeIcon