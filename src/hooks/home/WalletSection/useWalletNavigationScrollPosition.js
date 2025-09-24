import { useEffect, useState } from 'react';

export const useWalletNavigationScrollPosition = (tabMenuRef) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScrollWidth, setMaxScrollWidth] = useState(0);

  useEffect(() => {
    const currentTabRef = tabMenuRef.current;

    const checkScrollPosition = () => {
      const scrollWidth = tabMenuRef.current.scrollWidth;
      const clientWidth = tabMenuRef.current.clientWidth;
      const scrollLeft = tabMenuRef.current.scrollLeft;
  
      setScrollPosition(scrollLeft);
      setMaxScrollWidth(scrollWidth - clientWidth);
    };
  
    checkScrollPosition();
  
    currentTabRef.addEventListener('scroll', checkScrollPosition);
    window.addEventListener('resize', checkScrollPosition);
  
    return () => {
      currentTabRef.removeEventListener('scroll', checkScrollPosition);
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, [tabMenuRef]);

  return {scrollPosition, maxScrollWidth}
}