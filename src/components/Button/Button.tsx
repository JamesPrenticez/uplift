import React, {type ReactNode, type ReactElement} from "react"
import { twMerge } from "tailwind-merge";
import "../../styles/index.css"

export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  name?: string;
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
  onClick?: () => void;
}

const Button = ({
  type = "button",
  name,
  className,
  disabled,
  children,
  onClick
}: ButtonProps): ReactElement => {

  const handleClick = () => {
    if (disabled) return;
    if (onClick) onClick();
  };

  return (
		<button 
      type={type}
      name={name}
			disabled={disabled}
			className={twMerge(`
      bg-black
      hover:bg-opacity-80
      text-white
        text-center
        p-2
        rounded-md
        select-none
        cursor-pointer
        ${className ?? ""}
      `)}
			onClick={handleClick}
		>
			{children ?? name}
		</button>
  )
}

export default Button