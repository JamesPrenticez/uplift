import React, {type ReactElement} from "react"
import Umbrella from "../Umbrella";
import { twMerge } from "tailwind-merge";

import "../../assets/logo.svg"
export interface LogoProps {
  className: string;
  logoText: string;
  logoImage: ReactElement
}

const Logo = ({
  className,
  logoText = "Uplift",
  logoImage = <Umbrella width="50"/>
}:LogoProps): ReactElement => {
  return (
    <div 
      className={twMerge(`
        flex
        items-center
        select-none
        text-sm
        text-black
        ${className ?? ""}
      `)}
    >
      <span>
        {logoImage}
      </span>
      <span>
        <h1 className='hover:text-purple-500 cursor-pointer'>
          {logoText}
        </h1>
      </span>
    </div>
  )
}

export default Logo