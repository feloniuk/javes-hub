'use client'
import { useRef } from 'react';
import Image from 'next/image';
import { useFuelSectionAnimation } from '@/hooks/token/FuelSection/useFuelSectionAnimation';
import useTextAnimation from '@/hooks/useTextAnimation';
import s from './Fuel.module.scss';

const Fuel = () => {
  const containerRef = useRef();
  const headingRef = useRef();
  const imageRef = useRef();

  useFuelSectionAnimation(containerRef, headingRef, imageRef);

  const svgAnimations = [
    { selector: 'first', start: 54.8 },
    { selector: 'second', start: 20.2 }
  ];

  useTextAnimation(svgAnimations);

  return (
    <section ref={containerRef} className={s.section}>
      <div className="container">
        <h2 ref={headingRef} className={`${s.heading} heading-2`}>
          The <span className="bold">Fuel</span>
        </h2>

        <div className={s.contentWrapper}>
          <div ref={imageRef} className={s.imageWrapper}>
            <Image
              className={s.image}
              src="/assets/token/fuel/fuel-img.svg"
              alt="Graphic icons"
              width={256}
              height={276}
            />
          </div>

          <p id='text' className={`${s.text} notranslate`}>
            JVS Token is the fuel that powers everything in the Javes Ecosystem. 
            Our business model is designed so that the token is naturally used 
            in all our business processes,{' '}
            <svg
              className={s.icon}
              role='img'
              aria-label='Shop icon'
              id='first'
            >
              <use xlinkHref='/assets/sprite.svg#icon-shops'></use>
            </svg>
            {' '}creating incredible token utility.
            <br /><br />
            This approach ensures that Javes Token is not just another digital asset, 
            it&apos;s a vital part of how our ecosystem operates, driving value and 
            facilitating transactions across our platform.{' '}
            <svg
              className={s.icon}
              role='img'
              aria-label='Crown icon'
              id='second'
            >
              <use xlinkHref='/assets/sprite.svg#icon-crown'></use>
            </svg>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Fuel