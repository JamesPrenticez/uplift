import React, {useState, type ReactElement} from "react"

export interface HamburgerProps {
}

const Hamburger = ({}:HamburgerProps): ReactElement => {
	const [isOpen, setIsOpen] = useState(false)

  return (
    <div 
      className="
        flex
        h-20
        w-7
        items-center
        justify-center
        cursor-pointer
      "
      onClick={() =>  setIsOpen(!isOpen)}
    >
      {/* Top */}
      <span 
        className={`
          absolute
          h-1 
          w-7 
          bg-black
          rounded-md
          transform
          transition
          duration-500
          ease-in-out
          mb-4
          ${isOpen ? 'opacity-0' : 'opacity-100'}
        `}
      />
      {/* Middle */}
      <span 
        className={`
          absolute
          h-1
          w-7
          bg-black
          rounded-md
          transform
          transition 
          duration-500
          ease-in-out
          ${isOpen ? ' -rotate-45' : ''}
        `}
      />
      <span 
        className={`
          absolute
          h-1
          w-7
          bg-black
          rounded-md
          transform
          transition 
          duration-500
          ease-in-out
          ${isOpen ? ' rotate-45' : ''}
        `}
      />
      {/* Bottom */}
      <span 
        className={`
          absolute
          h-1
          w-7
          bg-black
          rounded-md
          transform
          transition
          duration-500
          ease-in-out
          mt-4
          ${isOpen ? 'opacity-0' : 'opacity-100'}
        `}
      />
  </div>
  )
}

export default Hamburger