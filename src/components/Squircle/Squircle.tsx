import React, {type ReactElement, type ReactNode} from 'react';


interface SquircleProps {
  bgColor: string;
  children: ReactNode;
}

const Squircle = ({ bgColor, children }: SquircleProps): ReactElement => {
  return (
    <div className="relative inline-flex overflow-hidden">
      <svg viewBox="0 0 200 200" height={500} width={500} xmlns="http://www.w3.org/2000/svg">
        <path
          fill={bgColor}
          d="M 0, 100 C 0, 12 12, 0 100, 0 S 200, 12 200, 100 188, 200 100, 200 0, 188 0, 100"
        />
      </svg>
      <div className='absolute top-0 left-0 bg-green-500'>
        {children}
      </div>
    </div>
  );
};

export default Squircle;