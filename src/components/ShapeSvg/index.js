import React from 'react';

import {
  Svg,
} from './ShapeSvgElements';

const Circle = ({ color }) => {
  return (
    <circle cx='50%' cy='50%' r='10' stroke={color} strokeWidth='3' fill='transparent'/>
  )
}

const Cresent = ({ color }) => {
  return (  
  <path 
    d='M32.36774.34317c.99276 5.63023-1.09332 11.3614-5.47227 15.03536-4.37895 3.67396-10.3855 4.73307-15.75693 2.77837C5.76711 16.2022 1.84665 11.53014.8539 5.8999l3.15139-.55567c.7941 4.50356 3.93083 8.24147 8.22772 9.8056 4.29688 1.56413 9.10275.71673 12.60554-2.2227C28.34133 9.98771 30.01045 5.4024 29.21635.89884l3.15139-.55567z' 
    fill={color} 
    fillRule='evenodd'
    />
  )
}

const X = ({ color }) => {
  return (
  <>
    <line x2='20' y2='20' stroke={color} strokeWidth='3' strokeLinecap='round' />
    <line x1='20' y2='20' stroke={color} strokeWidth='3' strokeLinecap='round' />
  </>
  )
}

const ShapeSvg = ({ className, dataSpeed, top, left, bottom, right, circle, cresent, x, color }) => {
  return (
    <>
      <Svg className={className} dataSpeed={dataSpeed} viewBox='0 0 24 25' top={top} left={left} bottom={bottom} right={right}>
        {circle &&
          <Circle color={color} />
        }
        {cresent &&
          <Cresent color={color} />
        }
        {x &&
          <X color={color} />
        }
      </Svg>
    </>
  )
}

export default ShapeSvg;
