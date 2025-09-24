'use client';
import { useRef } from 'react';
import { useGamesSectionAnimation } from '@/hooks/home/GamesSection/useGamesSectionAnimation';
import s from './GamesSection.module.scss';

const GamesSection = ({ children }) => {
  const sectionRef = useRef();
  const headingRef = useRef();
  const textRef = useRef();
  const gridRef = useRef();

  useGamesSectionAnimation(sectionRef, headingRef, textRef, gridRef);

  return (
    <section ref={sectionRef} className={s.section}>
      <div className='container'>
        <div className={s.sectionHeader}>
          <h2 ref={headingRef} className={`${s.heading} heading-2`}>
            Games in the <span className='bold'>Javes Ecosystem</span>
          </h2>

          <p ref={textRef} className={s.description}>
            Games where Pro-Players are currently executing deals through the
            JAVES trading ecosystem.
          </p>
        </div>

        <div ref={gridRef} className={s.grid}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
