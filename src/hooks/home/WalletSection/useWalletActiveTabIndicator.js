import { useEffect } from 'react';

export const useWalletActiveTabIndicator = (deviceType, activeNavItem, tabRefs, indicatorRef, tabMenuRef) => {
  useEffect(() => {
    const updateIndicator = () => {
      const activeTab = tabRefs.current[activeNavItem];
      const indicator = indicatorRef.current;
      const tabMenu = tabMenuRef.current;
  
      if (activeTab && indicator && tabMenu) {
        if(deviceType === 'Mobile') {
          const { left: tabLeft, width: tabWidth } = activeTab.getBoundingClientRect();
          const { left: navLeft } = tabMenu.getBoundingClientRect();
          const scrollLeft = tabMenu.scrollLeft;
          const relativeLeft = tabLeft - navLeft + scrollLeft;
  
          indicator.style.width = `${tabWidth}px`;
          indicator.style.transform = `translateX(${relativeLeft}px)`;
          indicator.style.height = '';
        } else {
          const { top: tabTop, height: tabHeight } = activeTab.getBoundingClientRect();
          const { top: navTop } = tabMenu.getBoundingClientRect();
          const scrollTop = tabMenu.scrollTop;
          const relativeTop = tabTop - navTop + scrollTop;
  
          indicator.style.height = `${tabHeight}px`;
          indicator.style.transform = `translateY(${relativeTop}px)`;
          indicator.style.width = '';
        }
    
      }
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);


    return () => {
      window.removeEventListener('resize', updateIndicator);
    };

  }, [deviceType, activeNavItem, tabRefs, indicatorRef, tabMenuRef]);
}