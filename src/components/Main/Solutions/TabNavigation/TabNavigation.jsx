import s from './TabNavigation.module.scss';
import { useState, useRef, useEffect } from 'react';
import { useWindowSize } from 'usehooks-ts';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TabNavigation = ({ items, onHandleActiveNavItem, activeNavItem, activeToggle }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const containerRef = useRef(null);
  const tabMenuRef = useRef(null);
  const indicatorRef = useRef(null);
  const tabRefs = useRef({});

  const setTabRef = (item, element) => {
    tabRefs.current[item] = element;
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        toggleActions: "play none none none",
      },
      onStart: () => setHasAnimated(true)
    });

    tl.fromTo(containerRef.current, 
      { autoAlpha: 0 }, 
      { autoAlpha: 1, duration: 0.8 }
    )
  
    .fromTo(tabMenuRef.current, 
      { x: 100, autoAlpha: 0 }, 
      { x: 0, autoAlpha: 1, duration: 0.8 },
      '-=0.8',
    );
  }, []);

  useGSAP(() => {
    if (hasAnimated) {
      gsap.fromTo(tabMenuRef.current, 
        { x: 100, autoAlpha: 0 }, 
        { x: 0, autoAlpha: 1, duration: 0.8 }
      );
    }
  }, [activeToggle]);


  useEffect(() => {
    const updateIndicator = () => {
      const activeTab = tabRefs.current[activeNavItem];
      const indicator = indicatorRef.current;
      const tabMenu = tabMenuRef.current;
  
      if (activeTab && indicator && tabMenu) {
        const { left: tabLeft, width: tabWidth } = activeTab.getBoundingClientRect();
        const { left: navLeft } = tabMenu.getBoundingClientRect();
        const scrollLeft = tabMenu.scrollLeft;
        const relativeLeft = tabLeft - navLeft + scrollLeft;
    
        indicator.style.width = `${tabWidth}px`;
        indicator.style.transform = `translateX(${relativeLeft}px)`;
      }
    };

    updateIndicator();

    window.addEventListener('resize', updateIndicator);

    return () => {
      window.removeEventListener('resize', updateIndicator);
    };

  }, [activeNavItem]);


  useEffect(() => {
    const element = tabMenuRef.current;
    if (element) {
      element.scrollLeft = 0;
    }

  }, [activeToggle]);

  const activeClass = activeToggle === 'proPlayers' ? 'active-crimson' : 'active-apricot';


  const handleScrollLeft = () => {
    const currentTabRef = tabMenuRef.current;
    if (currentTabRef) {
      currentTabRef.scrollLeft -= 100;
    }
  }
  const handleScrollRight = () => {
    const currentTabRef = tabMenuRef.current;
    if (currentTabRef) {
      currentTabRef.scrollLeft += 100;
    }
  }


  const [deviceType, setDeviceType] = useState('');

  const { width } = useWindowSize();

  useEffect(() => {
    const updateDeviceType = () => {
      if (width < 1024) {
        setDeviceType('Mobile');
      } else {
        setDeviceType('Desktop');
      }
    };

    updateDeviceType();
  }, [width]);




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
  }, []);

  return (
    <div ref={containerRef} className={s.tabNavigation}>
      {deviceType === 'Mobile' && scrollPosition > 10 && (
        <button className={s.scrollButtonLeft} onClick={handleScrollLeft}>&lt;</button>
      )}

      <nav 
        className={s.tabMenu} 
        ref={tabMenuRef} 
      >
        {items.map(item => (
          <button 
            key={item} 
            ref={el => setTabRef(item, el)}
            className={`${s.tabButton} ${activeNavItem === item ? s.activeTab : ''}`}
            onClick={() => onHandleActiveNavItem(item)}
          >
            {item}
          </button>
        ))}

        <div className={`${s.tabIndicator} ${s[activeClass]}`} ref={indicatorRef}></div>
      </nav>

      {deviceType === 'Mobile' && scrollPosition < maxScrollWidth - 10 && (
        <button className={s.scrollButtonRight} onClick={handleScrollRight}>&gt;</button>
      )}
    </div>
  )
}

export default TabNavigation