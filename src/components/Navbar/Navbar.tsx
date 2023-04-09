import React, {type ReactElement, useState } from 'react'

const pages = [
	{name: 'Reporting', url: '/reporting', icon: '', requiresAuth: true},
	{name: 'Select Criteria', url: '/select_criteria', icon: '', requiresAuth: true},
]

export default function Navbar(): ReactElement {
  const [isOpen, setIsOpen] = useState(false)
	// const isAuthenticated = useIsAuthenticated();


  return (
    <header className='bg-black text-white'>
      <nav className='hidden lg:flex w-full mx-auto items-center justify-between h-20 px-3 max-w-7xl'>
        <div className='flex items-center space-x-4 text-lg text-theme-secondary '>

					{/* } */}
					{pages.map((item, index) => (
            <></>
						// <NavLink key={index} className="navItem" to={item.url}>{item.name}</NavLink>
					))}
        </div>
				<div className='flex items-center space-x-4'>
        	{/* <Switch /> */}
				</div>
      </nav>

			{/* Mobile View */}
			<nav className='flex lg:hidden w-full mx-auto items-center justify-between h-20 px-3 max-w-7xl'>
          {/* <Hamburger /> */}
				<div className={`h-screenNav w-full fixed top-[5rem] -right-full z-50 ${isOpen ? 'transform transition duration-700 ease-in-out -translate-x-full' : 'transform transition duration-700 ease-in-out translate-x-full'}`}> 
        	<div className="bg-theme-primary border border-theme-tertiary h-screenNav"> 
						{/* {pages.map((item, index) => (
							<NavLink key={index} className="hamburgerItem" to={item.url} onClick={() => setHamburger(false)}>{item.name}</NavLink>
						))} */}
					</div>
				</div>
			</nav>
    </header>
  )
}