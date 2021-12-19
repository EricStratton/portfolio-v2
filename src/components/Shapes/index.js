import React from 'react';

import ShapeSvg from './../ShapeSvg';
import {
  ShapesContainer,
} from './ShapesElements';

const Shapes = () => {
  return (
    <>
      <ShapesContainer>
        <ShapeSvg 
          color={'#fff'}
          top={'25%'}
          left={'50%'} 
          circle 
        />
        <ShapeSvg 
          color={'#fff'} 
          top={'15%'}
          left={'25%'}
          cresent 
        />
        <ShapeSvg 
          color={'#fff'} 
          top={'20%'}
          left={'40%'}
          x 
        />
        <ShapeSvg 
          color={'#fff'}
          bottom={'25%'}
          right={'50%'} 
          circle 
        />
        <ShapeSvg 
          color={'#fff'} 
          bottom={'15%'}
          right={'25%'}
          cresent 
        />
        <ShapeSvg 
          color={'#fff'} 
          bottom={'20%'}
          right={'40%'}
          x 
        />
        <ShapeSvg 
          color={'#fff'}
          top={'45%'}
          right={'35%'} 
          circle 
        />
        <ShapeSvg 
          color={'#fff'} 
          top={'35%'}
          right={'10%'}
          cresent 
        />
        <ShapeSvg 
          color={'#fff'} 
          top={'40%'}
          right={'25%'}
          x 
        />
        <ShapeSvg 
          color={'#fff'}
          bottom={'45%'}
          left={'35%'} 
          circle 
        />
        <ShapeSvg 
          color={'#fff'} 
          bottom={'35%'}
          left={'10%'}
          cresent 
        />
        <ShapeSvg 
          color={'#fff'} 
          bottom={'40%'}
          left={'25%'}
          x 
        />
      </ShapesContainer>
    </>
  )
}

export default Shapes;
