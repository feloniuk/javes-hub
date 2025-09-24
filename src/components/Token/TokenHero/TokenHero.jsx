'use client'
import Button from '@/components/Common/Button/Button';
import { useRef } from 'react';
import s from './TokenHero.module.scss';
import Lottie from "lottie-react";
import tokenDesktop from '@/lottie/token/hero-token-desktop.json';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const TokenHero = () => {
  const headingRef = useRef();
  const descrRef = useRef();
  const btnRef = useRef();
  const animationRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" }, delay: 1 });

    tl.fromTo(animationRef.current,
              { autoAlpha: 0 },
              { autoAlpha: 1, duration: 0.8 })
      .fromTo(headingRef.current,
              { x: -50, autoAlpha: 0 },
              { x: 0, autoAlpha: 1, duration: 0.8 }, "-=0.5")
      .fromTo(descrRef.current,
              { x: 50, autoAlpha: 0 },
              { x: 0, autoAlpha: 1, duration: 0.8 }, "-=0.5")
      .fromTo(btnRef.current,
              { y: 50, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, duration: 0.8 }, "-=0.5")
      
  }, []);

  return (
    <section className={s.sectionWrapper}>
      <div className={s.contentWrapper}>
        <h1 ref={headingRef} className={`${s.heading} heading-1`}>JVS Token</h1>
        <p ref={descrRef} className={`${s.subHeading} heading-2`}>The Fuel that Powers Everything</p>

        <div ref={btnRef} className={s.btnWrapper}>
          <Button href='/' className='buttonTokenHero' disabled>Get JVS Token</Button>
          <span className={s.tempText}>Coming soon</span>
        </div>

        <div ref={animationRef} className={s.animationWrapper}>
          <Lottie 
            animationData={tokenDesktop} 
            loop={true}
            className={s.animation}
          />
        </div>
      </div>
    </section>
  )
}

export default TokenHero