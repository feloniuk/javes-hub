'use client'
import Image from 'next/image';
import { useRef } from 'react';
import useTextAnimation from '@/hooks/useTextAnimation';
import { useMissionSectionAnimation } from '@/hooks/blockchain/MissionSection/useMissionSectionAnimation';
import s from './Mission.module.scss'

const Mission = () => {
  const containerRef = useRef();
  const headingRef = useRef();
  const imageRef = useRef();

  useMissionSectionAnimation(containerRef, headingRef, imageRef);

  const svgAnimations = [
    { selector: 'first', start: 70.5 },
    { selector: 'second', start: 49.6 },
    { selector: 'third', start: 24.5 }
  ];
  useTextAnimation(svgAnimations);

  return (
    <section ref={containerRef} className={s.section}>
      <div className="container">
        <h2 ref={headingRef} className={`${s.heading} heading-2`}>
          The <span className="bold">Mission</span>
        </h2>

        <div className={s.contentWrapper}>
          <div ref={imageRef} className={s.imageWrapper}>
            <Image
              className={s.image}
              src="/assets/blockchain/mission/mission.svg"
              alt="Graphic icons"
              width={323}
              height={281}
            />
          </div>

          <p id='text' className={`${s.text} notranslate`}>
            Blockchain gaming is the new thing, but it doesn&apos;t really grab true gamers.{' '}
            <svg
              className={s.icon}
              role='img'
              aria-label='Shop icon'
              id='first'
            >
              <use xlinkHref='/assets/sprite.svg#icon-gamepad'></use>
            </svg>
            {' '}The technology behind these games often doesn&apos;t match up well with 
            what gaming&apos;s all about.

            <br /><br />

            If we want to get the huge crowd of regular gamers from the old web{' '}
            <svg
              className={s.icon}
              role='img'
              aria-label='Crown icon'
              id='second'
            >
              <use xlinkHref='/assets/sprite.svg#icon-robot'></use>
            </svg>
            {' '}into blockchain, we need to focus on what they like and use blockchain where 
            it actually makes things better for them.

            <br /><br />

            That&apos;s what Javes is here to do. We&apos;re making it easy for old-school gamers{' '}
            <svg
              className={s.icon}
              role='img'
              aria-label='Crown icon'
              id='third'
            >
              <use xlinkHref='/assets/sprite.svg#icon-headphones'></use>
            </svg>
            {' '}to step into the blockchain world.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Mission