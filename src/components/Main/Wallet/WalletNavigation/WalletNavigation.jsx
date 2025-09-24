import { useRef, useEffect, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';
import { useWalletActiveTabIndicator } from '@/hooks/home/WalletSection/useWalletActiveTabIndicator';
import { useWalletNavigationAnimation } from '@/hooks/home/WalletSection/useWalletNavigationAnimation';
import { useWalletNavigationScrollPosition } from '@/hooks/home/WalletSection/useWalletNavigationScrollPosition';
import data from '../data.json';
import s from './WalletNavigation.module.scss';

const WalletNavigation = ({ onHandleActiveNavItem, activeNavItem }) => {
  const { width } = useWindowSize();
  const [deviceType, setDeviceType] = useState(width >= 1200 ? 'Desktop' : 'Mobile');

  const containerRef = useRef(null);
  const tabMenuRef = useRef(null);
  const indicatorRef = useRef(null);
  const tabRefs = useRef({});

  const setTabRef = (item, element) => {
    tabRefs.current[item] = element;
  };

  useEffect(() => {
    const updateDeviceType = () => {
      setDeviceType(width >= 1200 ? 'Desktop' : 'Mobile');
    };

    updateDeviceType();
  }, [width]);

  useWalletActiveTabIndicator(deviceType, activeNavItem, tabRefs, indicatorRef, tabMenuRef);
  useWalletNavigationAnimation(containerRef, tabMenuRef);

  useEffect(() => {
    const element = tabMenuRef.current;
    if (element) {
      element.scrollLeft = 0;
    }
  }, []);

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

  const {scrollPosition, maxScrollWidth} = useWalletNavigationScrollPosition(tabMenuRef);

  return (
    <div ref={containerRef} className={s.tabNavigation}>
      {deviceType === 'Mobile' && scrollPosition > 10 && (
        <button className={s.scrollButtonLeft} onClick={handleScrollLeft}>&lt;</button>
      )}

      <nav 
        className={s.tabMenu} 
        ref={tabMenuRef} 
      >
        {data.navigation.map(item => (
          <button 
            key={item}
            ref={el => setTabRef(item, el)}
            className={`${s.tabButton} ${activeNavItem === item ? s.active : ''}`}
            onClick={() => onHandleActiveNavItem(item)}
          >
            {item}
          </button>
        ))}

        <div className={s.tabIndicator} ref={indicatorRef}></div>
      </nav>

      {deviceType === 'Mobile' && scrollPosition < maxScrollWidth - 10 && (
        <button className={s.scrollButtonRight} onClick={handleScrollRight}>&gt;</button>
      )}
    </div>
  )
}

export default WalletNavigation;