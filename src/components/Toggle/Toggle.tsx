import React, {type ReactNode} from "react"
import "../../styles/index.css"

export interface ToggleProps {
  label: string;
  children?: ReactNode;
}

const Toggle = ({children, label}:ToggleProps) => {
  return (
    <div className="w-64 h-64 bg-red-500">
      {label}
    </div>
  )
}

export default Toggle