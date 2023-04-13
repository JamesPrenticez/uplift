import React, { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface SquircleProps {
  width?: number;
  height?: number;
  roundness?: number;
  bgColor?: string;
  className?: string;
  children?: ReactNode;
}

const Squircle: FC<SquircleProps> = ({ 
  width = 100,
  height,
  roundness = 1,
  bgColor = '#c1f2c7',
  className,
  children 
}) => {
  const computedWidth = width;
  const computedHeight = height || width;

  const getSvgPath = () => {
    const w = computedWidth;
    const h = computedHeight;
    const wm = w * (h / w);
    const r = -(w / 20) + (w / 10) * roundness;
    const path = `
      M ${w / 2},0
      C ${r},0          0,${r}          0,${wm / 2}
        0,${wm - r}     ${r},${wm}      ${w / 2},${wm}
        ${w - r},${wm}  ${w},${wm - r}  ${w},${wm / 2}
        ${w},${r}       ${w - r},0      ${w / 2},0
    `;
    return path.replace(/  +/g, ' ').replace(/\n/gi, '');
  };

  const getSvgString = () => {
    const path = getSvgPath();
    const svg = `<svg xmlns='http://www.w3.org/2000/svg'><path d='${path}' fill='${bgColor}'></path></svg>`;
    return svg.replace(/#/g, '%23').replace(/</g, '%3C').replace(/>/g, '%3E');
  };

  const bgImage = `url("data:image/svg+xml;utf8,${getSvgString()}")`;

  return (
    <div
      className={twMerge(`
      w-[${computedWidth}px]
      h-[${computedHeight}px]
      ${className ?? ""}
    `)}
     style={{ backgroundImage: bgImage }}>
      {children}
    </div>
  );
};

export default Squircle;

// Credit: https://codepen.io/simeydotme/pen/oOGmYe