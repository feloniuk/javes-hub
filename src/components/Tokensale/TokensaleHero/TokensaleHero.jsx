'use client'
import Button from '@/components/Common/Button/Button';
import s from './TokensaleHero.module.scss';
import Lottie from "lottie-react";
import tokenTree from '@/lottie/tokensale/hero-tree.json';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const TokensaleHero = () => {
  const headingRef = useRef();
  const btnRef = useRef();
  const animationRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" }, delay: 1 });

    tl.fromTo(animationRef.current,
              { autoAlpha: 0 },
              { autoAlpha: 1, duration: 0.8 })
      .fromTo(headingRef.current,
              { y: -50, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, duration: 0.8 }, "-=0.5")
      .fromTo(btnRef.current,
              { y: 50, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, duration: 0.8 }, "-=0.5")
      
  }, []);

  return (
    <section className={s.sectionWrapper}>
      <div className={s.contentWrapper}>
        <h1 ref={headingRef} className={`${s.heading} heading-1`}>
          <span className={s.orangeGradientText}>Welcome aboard</span> 
          {` as an `}
          <span className={s.purpleGradientText}>investor!</span>
        </h1>

        <div ref={btnRef} className={s.btnWrapper}>
          <Button href='/' className='buttonTokenHero'>Buy JVS Token</Button>
        </div>

        <div ref={animationRef} className={s.animationWrapper}>
          <Lottie 
            animationData={tokenTree} 
            loop={true}
            className={s.animation}
          />
        </div>
      </div>
    </section>
  )
}

export default TokensaleHero