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
import Document from './../../assets/eric_stratton_resume.pdf';

const HeroSection = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true)
    }, 4500)
    return () => clearTimeout(timeout);
  });

  return (
    <>
      <HeroWrapper>
        <Shapes />
        <Section>
          <Column>
            <HeroContainer>
              <HeroInfoWrapper>
                <FadeInUp delay={100} initialInView>
                  <HeroImgWrapper>
                    <HeroImgCircle>
                      <HeroCodeIcon />
                    </HeroImgCircle>
                  </HeroImgWrapper>
                </FadeInUp>
                <FadeInUp delay={300} initialInView>
                  <HeroTextWrapper>
                    <Typed string={'<h1>Eric Stratton</h1>'} pause={2000} />
                    {show &&
                      <Typed string={'<p>web developer</p>'} pause={0} />
                    }
                  </HeroTextWrapper>
                </FadeInUp>
                <FadeInUp delay={6500} initialInView>
                  <HeroIconWrapper>
                    <HeroIconLink aria-label='LinkedIn' href='https://www.linkedin.com/in/eric-j-stratton/' target='_blank' rel='noopener noreferrer'>
                      <FaLinkedin />
                    </HeroIconLink>
                    <HeroIconLink aria-label='GitHub' href='https://github.com/EricStratton' target='_blank' rel='noopener noreferrer'>
                      <FaGithub />
                    </HeroIconLink>
                    <HeroIconLink aria-label='Resume' href={Document} target='_blank' rel='noopener noreferrer'>
                      <FaRegFilePdf />
                    </HeroIconLink>
                  </HeroIconWrapper>
                </FadeInUp>
              </HeroInfoWrapper>
            </HeroContainer>
          </Column>
        </Section>
      </HeroWrapper>
    </>
  )
}

export default HeroSection;
