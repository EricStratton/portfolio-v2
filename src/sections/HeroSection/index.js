import React from 'react';
import { FaLinkedin, FaGithub, FaRegFilePdf } from 'react-icons/fa';

import Section from '../../components/Section';
import Column from '../../components/Column';
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
                  <HeroImgCircle>
                    <HeroImgRendered />
                  </HeroImgCircle>
                </HeroImgWrapper>
                <HeroTextWrapper>
                  <Name>Eric Stratton</Name>
                  <HeroDescription>web developer</HeroDescription>
                </HeroTextWrapper>
                <HeroIconWrapper>
                  <HeroIconLink href='/'>
                    <FaLinkedin />
                  </HeroIconLink>
                  <HeroIconLink href='/'>
                    <FaGithub />
                  </HeroIconLink>
                  <HeroIconLink href='/'>
                    <FaRegFilePdf />
                  </HeroIconLink>
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
