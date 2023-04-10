import React, { ReactNode, ReactElement, ElementType } from "react";

interface MenuItemProps {
	to: string;
	children: ReactNode;
  component?: ElementType;
}

const MenuItem = ({ component: Component = 'button', to, children, ...rest }: MenuItemProps): ReactElement => {
  const isInternalLink = /^\/(?!\/)/.test(to);
  
  if (isInternalLink){
    Component =  'a';
  }

  return (
    <Component 
      href={isInternalLink ? to : undefined}
      target={!isInternalLink ? "_blank" : undefined}
      rel={!isInternalLink ? "noopener noreferrer" : undefined}
      className={`${to === window.location.pathname ? "text-red-500" : "text-blue-500"}`}
			{...rest}
		>
			{children}
    </Component>
  );
}

export default MenuItem;