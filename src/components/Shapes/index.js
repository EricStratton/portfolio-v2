import React from 'react';

import ShapeSvg from './../ShapeSvg';
import {
  ShapesContainer,
} from './ShapesElements';
import { useMousePosition } from './../../hooks/useMousePosition';



const Shapes = () => {
  const position = useMousePosition();
  
  const handleMouseParallax = () => {
    const shapes = document.querySelectorAll('.shapes');
    shapes.forEach(shape => {
      const speed = shape.getAttribute('data-speed');
      
      const x = (window.innerWidth - position.x*speed)/100;
      const y = (window.innerHeight - position.y*speed)/100;
      const depth = (-(position.x - position.y)/10);

      const translate = `translate3d(${x}px, ${y}px, ${depth}px)`;

      shape.setAttribute('style', `transform: ${translate}`);
    });
  }

  return (
    <>
      <ShapesContainer onMouseMove={handleMouseParallax}>
        <ShapeSvg
          className='shapes'
          dataSpeed={-5}
          color='#fff'
          top='25%'
          left='50%'
          circle
        />

        <ShapeSvg
          className='shapes'
          dataSpeed={5}
          color='#fff' 
          top='15%'
          left='25%'
          cresent 
        />
        <ShapeSvg
          className='shapes'
          dataSpeed={2}
          color='#fff' 
          top='20%'
          left='40%'
          x 
        />
        <ShapeSvg
          className='shapes'
          dataSpeed={6}
          color='#fff'
          bottom='25%'
          right='50%' 
          circle 
        />
        <ShapeSvg
          className='shapes'
          dataSpeed={8}
          color='#fff' 
          bottom='15%'
          right='25%'
          cresent 
        />
        <ShapeSvg
          className='shapes'
          dataSpeed={-2} 
          color='#fff' 
          bottom='20%'
          right='40%'
          x 
        />
        <ShapeSvg
          className='shapes'
          dataSpeed={4}
          color='#fff'
          top='45%'
          right='35%' 
          circle 
        />
        <ShapeSvg
          className='shapes'
          dataSpeed={-9} 
          color='#fff' 
          top='35%'
          right='10%'
          cresent 
        />
        <ShapeSvg
          className='shapes'
          dataSpeed={6}
          color='#fff' 
          top='40%'
          right='25%'
          x 
        />
        <ShapeSvg
          className='shapes'
          dataSpeed={-7} 
          color='#fff'
          bottom='45%'
          left='35%' 
          circle 
        />
        <ShapeSvg
          className='shapes'
          dataSpeed={-5}
          color='#fff' 
          bottom='35%'
          left='10%'
          cresent 
        />
        <ShapeSvg
          className='shapes'
          dataSpeed={5}
          color='#fff' 
          bottom='40%'
          left='25%'
          x 
        />
      </ShapesContainer>
    </>
  )
}

export default Shapes;
