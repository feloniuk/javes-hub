'use client'
import { useState, useRef, useEffect } from 'react';
import { useWindowSize } from 'usehooks-ts';
import Button from '@/components/Common/Button/Button';
import s from './Hero.module.scss';
import Lottie from "lottie-react";
import { useDeviceType } from '@/hooks/home/HeroSection/useDeviceType';
import { useLoadAnimation } from '@/hooks/home/HeroSection/useLoadAnimation';
import { useHeroSectionAnimation } from '@/hooks/home/HeroSection/useHeroSectionAnimation';

const Hero = () => {
  const [showBottomLoopAnimation, setShowBottomLoopAnimation] = useState(false);
  const [showTopLoopAnimation, setShowTopLoopAnimation] = useState(false);
  
  const bottomRef = useRef();
  const topRef = useRef();
  const containerRef = useRef();
  const headingRef = useRef();
  const descrRef = useRef();
  const joinBtnRef = useRef();
  const investBtnRef = useRef();
  
  const { width } = useWindowSize();
  const deviceType = useDeviceType(width);
  const animations = useLoadAnimation(deviceType);
  useHeroSectionAnimation(headingRef, descrRef, joinBtnRef, investBtnRef);
  
  const handleBottomAnimationComplete = () => {
    setShowBottomLoopAnimation(true);
  };
  
  const handleTopAnimationComplete = () => {
    setShowTopLoopAnimation(true);
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          bottomRef.current.play();
          topRef.current.play();
        } else {
          bottomRef.current.pause();
          topRef.current.pause();
        }
      });
    }, {threshold: 0.2});

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [bottomRef, topRef, containerRef]);

  return (
    <section className={s.sectionWrapper} ref={containerRef}>
      <div className={s.topAnimationWrapper}>
        {showTopLoopAnimation ? (
          <Lottie 
            animationData={animations.topLoopAnim} 
            lottieRef={topRef} 
            loop={true} 
          />
          ) : (
          <Lottie 
            animationData={animations.topStartAnim} 
            lottieRef={topRef} 
            autoplay={true} 
            loop={false} 
            onComplete={handleTopAnimationComplete} 
          />
        )}
      </div>

      <div className={s.contentWrapper}>
        <h1 ref={headingRef} className={`${s.heading} heading-1`}>
          <span className={s.orangeGradientText}>Trading</span> 
          {` Ecosystem for`}
          <span className={s.purpleGradientText}>&nbsp;Gamers</span>
        </h1>

        <p ref={descrRef} className={s.description}>
          Javes is the trading solution for millions of players worldwide, 
          who want to buy and sell items, currencies and services in online 
          computer games.
        </p>

        <div className={s.buttonsWrapper}>
          <div ref={joinBtnRef} className={s.btnWrapper}>
            <Button href='/' className='buttonHero' disabled>Join as a PRO-Player</Button>
            <span className={s.tempText}>Sign-ups start on June 26</span>
          </div>

          {/* <Link
            href='/' 
            className={s.linkHero} 
            role='button'
            ref={investBtnRef}
          >
            <span className={s.linkText}>Invest in Javes</span>
            <Image 
              className={s.linkArrow} 
              src='/assets/home/hero/hero-arrow.svg' 
              alt="Explore Sellers Solutions"
              width={14}
              height={14}
            />
          </Link> */}
        </div>
      </div>

      <div className={s.bottomAnimationWrapper}>
        {showBottomLoopAnimation ? (
          <Lottie 
            animationData={animations.bottomLoopAnim} 
            lottieRef={bottomRef} 
            loop={true} 
          />
          ) : (
          <Lottie 
            animationData={animations.bottomStartAnim} 
            lottieRef={bottomRef} 
            autoplay={true} 
            loop={false} 
            onComplete={handleBottomAnimationComplete} 
          />
        )}
      </div>
    </section>
  )
}

export default Hero