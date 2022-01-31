import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

import { 
  AccordionWrapper,
  AccordionHead,
  AccordionToggle,
  AccordionCodeIcon,
  AccordionBody, 
  AccordionToggleIcon 
} from './Accordion';



const Accordion = ({ children, link }) => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!isOpen);
  }

  return (
    <>
      <AccordionWrapper>
        <AccordionHead isOpen={isOpen}>
          <AccordionCodeIcon
            aria-label='GitHub' 
            href={link}
            target='_blank' 
            rel='noopener noreferrer'
          >
            <FaGithub />
          </AccordionCodeIcon>
          <AccordionToggle onClick={handleOpen}>
            <AccordionToggleIcon>
              {isOpen ? <FiMinus /> : <FiPlus />}
            </AccordionToggleIcon>
          </AccordionToggle>
        </AccordionHead>
          <AccordionBody isOpen={isOpen} aria-expanded={isOpen}>
            {children}
          </AccordionBody>
      </AccordionWrapper>
    </>
  )
}

export default Accordion;
