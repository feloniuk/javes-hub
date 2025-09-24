'use client'
// import FiltersBlock from '@/components/ProPlayers/FiltersBlock/FiltersBlock';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import s from './GamesGridSection.module.scss';

const GamesSection = ({ children }) => {
  // const [orderBy, setOrderBy] = useState('name');

  const headingRef = useRef();
  const gridRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.fromTo(headingRef.current,
              { x: -50, autoAlpha: 0 },
              { x: 0, autoAlpha: 1, duration: 0.8 })
      .fromTo(gridRef.current.children,
        { y: 100, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.1 },
        '-=0.6',
      );
  }, []);

  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.headingBlock}>
          <h1 ref={headingRef} className={`${s.heading} heading-2`}>
            <span className={s.gradientText}>Games</span> in the <span className={s.whiteText}>Javes</span> Ecosystem
          </h1>

          {/* <div className={s.filterBlock}>
            <FiltersBlock 
              leftText="Name" 
              rightText="Most Deals" 
              orderBy={orderBy} 
              onSetOrderBy={setOrderBy}
              leftSortType="name"
              rightSortType="deals"
            />
          </div> */}
        </div>

        <div ref={gridRef} className={s.grid}>
          {children}
        </div>
      </div>
    </section>
  )
}

export default GamesSection