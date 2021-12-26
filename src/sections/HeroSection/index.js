import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaRegFilePdf } from 'react-icons/fa';

import Section from '../../components/Section';
import Column from '../../components/Column';
import FadeInUp from '../../components/FadeInUp';
import {
  HeroWrapper,
  HeroContainer,
  HeroInfoWrapper,
  HeroImgWrapper,
  HeroImgCircle,
  HeroCodeIcon,
  HeroTextWrapper,
  HeroIconWrapper,
  HeroIconLink,
} from './HeroElements';
import Shapes from '../../components/Shapes';
import Typed from '../../components/Typed';


const HeroSection = () => {  
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true)
    }, 4500)
    return () => clearTimeout(timeout);
  })

  return (
    <>
      <HeroWrapper>
        <Shapes />
        <Section>
          <Column>
            <HeroContainer>
              <HeroInfoWrapper>
                <HeroImgWrapper>
                  <FadeInUp delay={100} initialInView>
                    <HeroImgCircle>
                      <HeroCodeIcon />
                    </HeroImgCircle>
                  </FadeInUp>
                </HeroImgWrapper>
                <HeroTextWrapper>
                  <FadeInUp delay={300} initialInView>
                    <Typed string={'<h1>Eric Stratton</h1>'} pause={2000} />
                    {show &&
                      <Typed string={'<p>web developer</p>'} pause={0} />
                    }
                  </FadeInUp>
                </HeroTextWrapper>
                <HeroIconWrapper>
                  <FadeInUp delay={6500} initialInView>
                    <HeroIconLink href='/'>
                      <FaLinkedin />
                    </HeroIconLink>
                    <HeroIconLink href='/'>
                      <FaGithub />
                    </HeroIconLink>
                    <HeroIconLink href='/'>
                      <FaRegFilePdf />
                    </HeroIconLink>
                  </FadeInUp>
                </HeroIconWrapper>
              </HeroInfoWrapper>
            </HeroContainer>
          </Column>
        </Section>
      </HeroWrapper>
    </>
  )
}

export default HeroSection;
