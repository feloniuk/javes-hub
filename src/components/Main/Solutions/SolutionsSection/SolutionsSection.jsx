'use client';
import { useState, useMemo, useEffect, useRef } from 'react';
import TabNavigation from '@/components/Main/Solutions/TabNavigation/TabNavigation';
import ContentCard from '@/components/Main/Solutions/ContentCard/ContentCard';
import s from './SolutionsSection.module.scss';
import data from '../data.json';
import ToggleButton from '@/components/Common/ToggleButton/ToggleButton';
import { useSearchParams } from 'next/navigation';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const formatId = (id) => {
  return id.replace(/([a-z])([A-Z])/g, '$1 $2');
};

const SolutionsSection = () => {
  const searchParams = useSearchParams();
  const toggle = searchParams.get('toggle') || 'proPlayers';
  const tab = searchParams.get('tab') ? formatId(searchParams.get('tab')) : 'PRO’s Database';

  const [activeToggle, setActiveToggle] = useState(toggle);
  const [activeNavItem, setActiveNavItem] = useState(tab);

  const sectionRef = useRef();
  const headingRef = useRef();
  const toggleRef = useRef();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      paused: true,
    });

    tl.fromTo(
      headingRef.current,
      { x: -100, autoAlpha: 0 },
      { x: 0, autoAlpha: 1, duration: 0.8 },
    ).fromTo(
      toggleRef.current,
      { x: 100, autoAlpha: 0 },
      { x: 0, autoAlpha: 1, duration: 0.8 },
      '-=0.6',
    );
  }, []);

  const handleToggle = (toggle, item) => {
    setActiveToggle(toggle);
    setActiveNavItem(item);
  };

  const activeNavigation = useMemo(
    () => data.navigation.find((nav) => nav.type === activeToggle),
    [activeToggle],
  );

  const activeContent = useMemo(
    () => data.content.find((item) => item.id === activeNavItem),
    [activeNavItem],
  );

  useEffect(() => {
    const handleLoad = () => {
        const hash = window.location.hash;
        if (hash && sectionRef.current) {
            const element = sectionRef.current;
            const top = element.getBoundingClientRect().top + window.pageYOffset - 130;
            window.document.scrollingElement?.scrollTo(0, top);
        }
    };

    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <section ref={sectionRef} id='solution' className={s.section}>
      <div className='container'>
        <div className={s.sectionHeader}>
          <h2 ref={headingRef} className={`${s.heading} heading-2`}>
            <span className='bold'>Solutions</span> Crafted from Market Pain{' '}
            <span className='bold'>Points</span>
          </h2>

          <div
            ref={toggleRef}
            className={`${s.battonWrapper} ${
              activeToggle === 'onlineShops' ? s.active : ''
            }`}
          >
            <ToggleButton
              btnClass='lefToggle'
              iconClass='leftToggleIcon'
              isActive={activeToggle === 'proPlayers'}
              onToggle={() => handleToggle('proPlayers', 'PRO’s Database')}
              iconHref='/assets/sprite.svg#icon-players'
              label='PRO Players'
            />

            <ToggleButton
              btnClass='rightToggle'
              iconClass='rightToggleIcon'
              isActive={activeToggle === 'onlineShops'}
              onToggle={() => handleToggle('onlineShops', 'Orders Management')}
              iconHref='/assets/sprite.svg#icon-shops'
              label='Online Shops'
            />
          </div>
        </div>

        {activeNavigation && (
          <TabNavigation
            items={activeNavigation.items}
            activeNavItem={activeNavItem}
            onHandleActiveNavItem={setActiveNavItem}
            activeToggle={activeToggle}
          />
        )}

        {activeContent && <ContentCard key={activeContent.id} activeContent={activeContent} />}
      </div>
    </section>
  );
};

export default SolutionsSection;
