'use client'
import FiltersBlock from '@/components/ProPlayers/FiltersBlock/FiltersBlock';
import s from './PlayersList.module.scss';
import { useState, useRef } from 'react';
import PlayersGrid from '@/components/ProPlayers/PlayersGrid/PlayersGrid';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const PlayersList = () => {
  const [orderBy, setOrderBy] = useState('lastDealDate');
  const headingRef = useRef();
  const toggleRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.fromTo(headingRef.current,
              { x: -50, autoAlpha: 0 },
              { x: 0, autoAlpha: 1, duration: 0.8 })
      .fromTo(toggleRef.current,
              { x: 50, autoAlpha: 0 },
              { x: 0, autoAlpha: 1, duration: 0.8 }, "-=0.5")
  }, []);
  
  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.headingBlock}>
          <h1 ref={headingRef} className={`${s.heading} heading-1`}>
            <span className="bold">PRO Players</span>
          </h1>

          <div ref={toggleRef} className={s.filterBlock}>
            <FiltersBlock 
              leftText="Last Deal" 
              rightText="Most Deals" 
              orderBy={orderBy} 
              onSetOrderBy={setOrderBy}
              leftSortType="lastDealDate"
              rightSortType="completedDealsCount"
            />
          </div>
        </div>

        <PlayersGrid orderBy={orderBy} />
      </div>
    </section>
  )
}

export default PlayersList