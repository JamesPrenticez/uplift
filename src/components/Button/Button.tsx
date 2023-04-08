import '../../twind'
import React, {type ReactNode, type ReactElement, type CSSProperties} from "react"
import { twMerge } from "tailwind-merge";
import { IColor } from "../../models/IColor";
import { isColorWord, colorShade } from "../../utils"

export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  name?: string;
  bgColor?: IColor;
  variant?: "filled" | "outlined"
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
  onClick?: () => void;
}

const Button = ({
  type = "button",
  name,
  bgColor = "black",
  variant,
  className,
  disabled,
  children,
  onClick
}: ButtonProps): ReactElement => {

  const handleClick = () => {
    if (disabled) return;
    if (onClick) onClick();
  };

  let buttonVariantStyles;
  let buttonBgColorIsWord = isColorWord(bgColor)

  let buttonBgColor = `bg-${bgColor}`

  switch (variant) {
    case 'filled':
      buttonBgColorIsWord ? (
        buttonVariantStyles = `bg-${bgColor}-${colorShade}/20 hover:bg-${bgColor}-${colorShade}/80 hover:text-white text-red-900`
      ) : (
        buttonVariantStyles = `bg-[${bgColor}] hover:bg-[${bgColor}] hover:text-white text-red-900`
      )
      break;
    case 'outlined':
      buttonVariantStyles = "bg-red-900"
      break;
    default:
      // buttonVariantStyles = `bg-${bgColor}-${colorShade}/20 hover:bg-${bgColor}-${colorShade}/80 hover:text-white text-red-900`
      buttonVariantStyles = `${buttonBgColor}`
  }

  return (
		<button 
      type={type}
      name={name}
			disabled={disabled}
			className={twMerge(`
        text-center
        p-2
        rounded-md
        select-none
        cursor-pointer
        ${buttonBgColor}
        ${className ?? ""}
      `)}
			onClick={handleClick}
		>
			{children ?? name}
		</button>
  )
}

export default Button