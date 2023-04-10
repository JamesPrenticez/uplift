import React, {type ReactElement, useState, type ReactNode, type ElementType, type SVGProps  } from 'react'
import MenuItem from '../MenuItem/MenuItem';

const pages = [
	{name: 'Reporting', url: '/reporting', icon: '', requiresAuth: true},
	{name: 'Select Criteria', url: '/select_criteria', icon: '', requiresAuth: true},
]

interface Page {
  name: string;
  url: string;
  icon?: SVGProps<SVGSVGElement>;
  requiresAuth?: boolean;
}

interface NavbarProps {
  logo?: ReactNode;
  pages?: Page[];
  menuItemProps?: NavbarProps["pages"] extends undefined ? never : {
    to: string;
    component: ElementType;
  };
}

export default function Navbar({logo, pages, menuItemProps}:NavbarProps): ReactElement {
  const [isOpen, setIsOpen] = useState(false)
	// const isAuthenticated = useIsAuthenticated();
            {/* <a
              key={page.name}
              href={page.url}
              className={`${page.url === window.location.pathname ? "text-red-500" : "text-green-500"}`}
            >
              {page.name}
            </a> */}

  return (
    <header className='bg-black text-white '>
      <nav className='hidden lg:flex w-full mx-auto items-center justify-between h-20 px-3 max-w-7xl'>
        <div className='flex items-center space-x-4 text-lg text-theme-secondary '>
          {logo && logo}

          {pages && 
            pages?.map((page) => (
              <MenuItem to={page.url} {...menuItemProps}>
                <p>{page.name}</p>
              </MenuItem>
            ))
          }
        </div>
				<div className='flex items-center space-x-4'>
        	{/* <Switch /> */}
				</div>
      </nav>
    </header>
  )
}


			// {/* Mobile View */}
			// <nav className='flex lg:hidden w-full mx-auto items-center justify-between h-20 px-3 max-w-7xl'>
      //     {/* <Hamburger /> */}
			// 	<div className={`h-screenNav w-full fixed top-[5rem] -right-full z-50 ${isOpen ? 'transform transition duration-700 ease-in-out -translate-x-full' : 'transform transition duration-700 ease-in-out translate-x-full'}`}> 
      //   	<div className="bg-theme-primary border border-theme-tertiary h-screenNav"> 
			// 			{/* {pages.map((item, index) => (
			// 				<NavLink key={index} className="hamburgerItem" to={item.url} onClick={() => setHamburger(false)}>{item.name}</NavLink>
			// 			))} */}
			// 		</div>
			// 	</div>
			// </nav>