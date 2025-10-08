'use client';
import { useRef } from 'react';
import { useGamesSectionAnimation } from '@/hooks/home/GamesSection/useGamesSectionAnimation';
import s from './GamesSection.module.scss';

interface GamesSectionProps {
  children: React.ReactNode;
  gamesCount?: number;
}

const GamesSection = ({ children, gamesCount = 0 }: GamesSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGamesSectionAnimation(sectionRef, headingRef, textRef, gridRef);

  return (
    <section ref={sectionRef} className={s.section}>
      <div className='container'>
        <div className={s.sectionHeader}>
          <h2 ref={headingRef} className={`${s.heading} heading-2`}>
            Games in the <span className='bold'>Javes Ecosystem</span>
          </h2>

          <p ref={textRef} className={s.description}>
            {gamesCount > 0 
              ? `${gamesCount} games where Pro-Players are currently executing deals through the JAVES trading ecosystem.`
              : 'Games where Pro-Players are currently executing deals through the JAVES trading ecosystem.'
            }
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