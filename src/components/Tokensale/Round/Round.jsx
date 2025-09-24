'use client'
import { useState, useEffect, useRef } from 'react'
import Countdown from 'react-countdown';
import CountdownTimer from '@/components/Tokensale/Round/CountdownTimer/CountdownTimer';
import s from './Round.module.scss';

import Lottie from "lottie-react";
import countdownMobile from '@/lottie/tokensale/countdown-mobile.json';
import countdown from '@/lottie/tokensale/countdown.json';
import Glow from '@/components/Common/Glow/Glow';

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

const Round = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const containerRef = useRef();
  const headingRef = useRef();
  const textRef = useRef();
  const counterRef = useRef();
  const descriptionRef = useRef();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      paused: true
    });

    tl.fromTo(headingRef.current, 
              { x: -100, autoAlpha: 0 }, 
              { x: 0, autoAlpha: 1, duration: 0.8 })
      .fromTo(textRef.current, 
              { x: -100, autoAlpha: 0 }, 
              { x: 0, autoAlpha: 1, duration: 0.8 }, "-=0.6")
      .fromTo(counterRef.current, 
              { y: 50, autoAlpha: 0 }, 
              { y: 0, autoAlpha: 1, duration: 0.8 }, "-=0.6")
      .fromTo(descriptionRef.current, 
              { y: 50, autoAlpha: 0 }, 
              { y: 0, autoAlpha: 1, duration: 0.8 }, "-=0.6")
  }, []);

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const countdownDate = new Date('May 29, 2024 00:00:00').getTime();

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <CountdownTimer
        days={days} 
        hours={hours} 
        minutes={minutes} 
        seconds={seconds}
      />
    );
  };

  return (
    <section ref={containerRef} className={s.section}>
      <div className={`${s.sectionWrapper} container`}>
        <div className={s.headingBlock}>
          <h2 ref={headingRef} className={`${s.heading} heading-2`}>
            <span className="bold">Private Round</span> on <span className="bold">May 29th</span>
          </h2>

          <p ref={textRef} className={s.text}>
            You can apply for the Token Sale and get a chance for an allocation in our Private Round. 
            If you don&apos;t receive an allocation in the Private Round, don&apos;t despair, you will be able 
            to participate in the next Community Round later this summer.
          </p>
        </div>

        <div ref={counterRef} className={s.contentBlock}>
          {isLoaded && (
            <Countdown
              date={countdownDate}
              renderer={renderer}
            />
          )}
          <p ref={descriptionRef} className={s.description}>
            The Token Sale in our Private Round is scheduled 
            for <span className="bold">May 29th, 2024</span>
          </p>

          <div className={s.animationWrapper}>
            {isLoaded && (
              <Lottie 
                animationData={countdown} 
                loop={true} 
              />
            )}
          </div>

          <div className={s.mobileAnimationWrapper}>
            {isLoaded && (
              <Lottie 
                animationData={countdownMobile} 
                loop={true} 
              />
            )}
          </div>
        </div>
      </div>

      <Glow className='rightTopTokensale' glowLink='/assets/glow/right-bottom-glow.svg' />
    </section>
  )
}

export default Round