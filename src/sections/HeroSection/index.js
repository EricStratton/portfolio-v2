import React from 'react';
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
  HeroImgRendered,
  HeroTextWrapper,
  Name,
  HeroDescription,
  HeroIconWrapper,
  HeroIconLink,
} from './HeroElements';

const HeroSection = () => {
  return (
    <>
      <HeroWrapper>
        <Section>
          <Column>
            <HeroContainer>
              <HeroInfoWrapper>
                <HeroImgWrapper>
                  <FadeInUp>
                    <HeroImgCircle>
                      <HeroImgRendered />
                    </HeroImgCircle>
                  </FadeInUp>
                </HeroImgWrapper>
                <HeroTextWrapper>
                  <FadeInUp delay={'0.3s'}>
                    <Name>Eric Stratton</Name>
                    <HeroDescription>web developer</HeroDescription>
                  </FadeInUp>
                </HeroTextWrapper>
                <HeroIconWrapper>
                  <FadeInUp delay={'0.4s'}>
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
