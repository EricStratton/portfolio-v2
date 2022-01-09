import React from 'react';

import {
  FooterContainer, 
  FooterText
} from './FooterElements';

const Footer = () => {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <FooterContainer>
        <FooterText onClick={handleScrollToTop}>Eric Stratton @ 2022</FooterText>
      </FooterContainer>
    </>
  )
}

export default Footer;
