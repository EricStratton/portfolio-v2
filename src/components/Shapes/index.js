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
      
      const x = (window.innerWidth - position.x*speed)/400;
      const y = (window.innerHeight - position.y*speed)/400;
      const depth = (position.x - position.y)/10;

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
          top='35%'
          left='20%'
          circle
        />
        <ShapeSvg
          className='shapes'
          dataSpeed={5}
          color='#fff' 
          top='15%'
          left='15%'
          cresent 
        />
        <ShapeSvg
          className='shapes'
          dataSpeed={2}
          color='#fff' 
          top='15%'
          left='40%'
          x 
        />
        <ShapeSvg
          className='shapes'
          dataSpeed={6}
          color='#fff'
          bottom='15%'
          right='35%' 
          circle 
        />
        <ShapeSvg
          className='shapes'
          dataSpeed={8}
          color='#fff' 
          bottom='25%'
          right='10%'
          cresent 
        />
        <ShapeSvg
          className='shapes'
          dataSpeed={-2} 
          color='#fff' 
          bottom='30%'
          right='30%'
          x 
        />
        <ShapeSvg
          className='shapes'
          dataSpeed={4}
          color='#fff'
          top='18%'
          right='33%' 
          circle 
        />
        <ShapeSvg
          className='shapes'
          dataSpeed={-9} 
          color='#fff' 
          top='12%'
          right='10%'
          cresent 
        />
        <ShapeSvg
          className='shapes'
          dataSpeed={6}
          color='#fff' 
          top='40%'
          right='20%'
          x 
        />
        <ShapeSvg
          className='shapes'
          dataSpeed={-7} 
          color='#fff'
          bottom='22%'
          left='32%' 
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
          bottom='36%'
          left='24%'
          x 
        />
      </ShapesContainer>
    </>
  )
}

export default Shapes;
