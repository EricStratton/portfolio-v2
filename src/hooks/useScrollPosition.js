import { useEffect, useState, useRef } from 'react';

export const useScrollPosition = () => {
  const [bodyOffset, setBodyOffset] = useState(
    document.body.getBoundingClientRect()
  );
  const [scrollY, setScrollY] = useState(bodyOffset.top);
  const [scrollDirection, setScrollDirection] = useState('');
  const lastScrollTop = useRef(0);
  
  useEffect(() => {
    const setScrollEvent = () => {
      setBodyOffset(document.body.getBoundingClientRect());
      setScrollY(-bodyOffset.top);
      setScrollDirection(lastScrollTop.current > -bodyOffset.top ? 'up' : 'down');
      lastScrollTop.current = -bodyOffset.top;
    }
    window.addEventListener('scroll', setScrollEvent);
    return () => {
      window.removeEventListener('scroll', setScrollEvent);
    }
  });

  return {
    scrollY,
    scrollDirection
  }
}