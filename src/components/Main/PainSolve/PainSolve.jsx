'use client'
import useTextAnimation from '@/hooks/useTextAnimation';
import { useRef } from 'react';
import Image from 'next/image';
import s from './PainSolve.module.scss';
import { usePainSolveSectionAnimation } from '@/hooks/home/PainSolveSection/usePainSolveSectionAnimation';

const PainSolve = () => {
  const containerRef = useRef();
  const headingRef = useRef();
  const imageRef = useRef();

  usePainSolveSectionAnimation(containerRef, headingRef, imageRef);

  const svgAnimations = [
    { selector: 'first', start: 52.6 },
    { selector: 'second', start: 20.2 }
  ];
  useTextAnimation(svgAnimations);

  return (
    <section ref={containerRef} className={s.section}>
      <div className="container">
        <h2 ref={headingRef} className={`${s.heading} heading-2`}>
          The <span className='bold'>Pain</span> we <span className='bold'>Solve</span>
        </h2>

        <div className={s.contentWrapper}>
          <div ref={imageRef} className={s.imageWrapper}>
            <Image
              className={s.image}
              src="/assets/home/pain-solve/pain-solve.svg"
              alt="Graphic icons for time, money, synchronization, and a check mark, representing a process or workflow."
              width={257}
              height={248}
            />
          </div>
          <p id='text' className={`${s.text} notranslate`}>
            Gamers worldwide complete up to 1 million transactions daily in various online
            games, exchanging items {' '}
            <svg
              className={s.icon}
              role='img'
              aria-label='Skull icon'
              id='first'
            >
              <use xlinkHref='/assets/sprite.svg#icon-skull'></use>
            </svg>
            {' '}currencies, and services within a disorganized, scam-ridden
            but a huge $12 billion market.  We are here to make things right!{' '}
            <svg
              className={s.icon}
              role='img'
              aria-label='Swords icon'
              id='second'
            >
              <use xlinkHref='/assets/sprite.svg#icon-swords'></use>
            </svg>
          </p>
        </div>
      </div>
    </section>
  )
}

export default PainSolve