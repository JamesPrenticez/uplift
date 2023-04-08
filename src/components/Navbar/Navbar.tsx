import React, {type ReactNode, type ReactElement} from "react"

export interface NavbarProps {
  children?: ReactNode;
}

const Navbar = ({}:NavbarProps): ReactElement => {

  const color = "blue"

  return (


    <div className={`h-32 bg-${color}-500`}>NavBar</div> 
  )
}

export default Navbar