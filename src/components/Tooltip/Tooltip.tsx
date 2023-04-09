import React, {useState, type ReactNode, type ReactElement} from "react"

export interface ToolTipProps {
  tooltipText: string;
  position: {
    x: "left" | "right"
    y: "top" | "bottom"
  }
  children?: ReactNode;
}

const Tooltip = ({
  tooltipText="tooltip",
  position = {x: "right", y: "bottom"},
  children,
}:ToolTipProps): ReactElement => {

  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div 
      className="
        relative
        inline-block
      "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <span 
        className={`
          transition 
          duration-300
          ease-linear
          ${showTooltip ? 'opacity-100 visible' : 'opacity-0 invisible'}
          absolute
          ${ position.x == 'left' ? 'left-0' : 'right-0' }
          ${ position.y == 'top' ? 'bottom-[102%]' : 'top-[102%]'}
          z-50
          bg-black
          text-white
          p-2
          text-center
          rounded-md
          after:content-['']
          after:absolute
          ${ position.y == 'top' ? 'after:top-[100%]' : 'after:bottom-[100%]'}
          ${ position.x == 'left' ? 'after:right-[70%]' : 'after:left-[70%]' }
          after:border-solid
          after:border-[5px]
          ${ position.y == 'top' ? 'after:border-t-black' : 'after:border-t-transparent'}
          after:border-r-transparent
          ${ position.y == 'top' ? 'after:border-b-transparent' : 'after:border-b-black'}
          after:border-l-transparent
        `}
      >
        {tooltipText}
      </span>
    </div>
  )
}

export default Tooltip