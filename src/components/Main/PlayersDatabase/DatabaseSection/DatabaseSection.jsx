'use client';
import { useState, useRef } from 'react';
import { usePlayersDatabaseAnimation } from '@/hooks/home/PlayersDatabaseSection/usePlayersDatabaseAnimation';
import ToggleButton from '@/components/Common/ToggleButton/ToggleButton';
import s from './DatabaseSection.module.scss';

const DatabaseSection = ({ children }) => {
  const [activeToggle, setActiveToggle] = useState('proPlayers');
  const sectionRef = useRef();
  const headingRef = useRef();
  const toggleRef = useRef();
  const gridRef = useRef();

  const handleToggle = (toggle) => {
    setActiveToggle(toggle);
  };

  usePlayersDatabaseAnimation(sectionRef, headingRef, toggleRef, gridRef);

  return (
    <section ref={sectionRef} className={s.section}>
      <div className='container'>
        <div className={s.sectionHeader}>
          <h2 ref={headingRef} className='heading-2'>
            <span className='bold'>PRO Players</span> Database
          </h2>

          <div
            ref={toggleRef}
            // className={`${s.battonWrapper} ${
            //   activeToggle === 'sellers' ? s.active : ''
            // }`}
            className={s.battonWrapper}
          >
            <ToggleButton
              btnClass='lefToggle'
              iconClass='leftToggleIcon'
              isActive={activeToggle === 'proPlayers'}
              onToggle={() => handleToggle('proPlayers')}
              iconHref='/assets/sprite.svg#icon-players'
              label='PRO Players'
            />

            <ToggleButton
              btnClass='rightToggle'
              iconClass='rightToggleIcon'
              isActive={activeToggle === 'sellers'}
              // onToggle={() => handleToggle('sellers')}
              onToggle={() => handleToggle('proPlayers')}
              iconHref='/assets/sprite.svg#icon-shops'
              label='Sellers'
            />
          </div>
        </div>

        <div ref={gridRef} className={s.grid}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default DatabaseSection;
