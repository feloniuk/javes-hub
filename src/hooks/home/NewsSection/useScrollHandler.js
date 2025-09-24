import { useState, useEffect, useCallback } from 'react';
import { useWindowSize } from 'usehooks-ts';

export const useScrollHandler = (sliderRef) => {
  const [isLeft, setIsLeft] = useState(false);
  const [isRight, setIsRight] = useState(false);
  const { width } = useWindowSize();

  const checkScrollPosition = useCallback(() => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setIsLeft(scrollLeft <= 0);
      setIsRight(scrollLeft >= scrollWidth - clientWidth);
    }
  }, [sliderRef]);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const scrollAmount = width > 1200 ? 263 : 235;
      sliderRef.current.scrollLeft -= scrollAmount;
      checkScrollPosition();
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const scrollAmount = width > 1200 ? 263 : 235;
      sliderRef.current.scrollLeft += scrollAmount;
      checkScrollPosition();
    }
  };

  useEffect(() => {
    checkScrollPosition();
    window.addEventListener('resize', checkScrollPosition);
    return () => window.removeEventListener('resize', checkScrollPosition);
  }, [checkScrollPosition]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', checkScrollPosition);
      return () => slider.removeEventListener('scroll', checkScrollPosition);
    }
  }, [sliderRef, checkScrollPosition]);

  return { isLeft, isRight, scrollLeft, scrollRight };
}