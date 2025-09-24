import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export const useBlockchainHeroAnimation = (animationRef, headingRef) => {
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" }, delay: 1 });

    tl.fromTo(animationRef.current,
              { autoAlpha: 0 },
              { autoAlpha: 1, duration: 0.8 })
      .fromTo(headingRef.current,
              { y: -50, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, duration: 0.8 }, "-=0.5")
      // .fromTo(btnRef.current,
      //         { y: 50, autoAlpha: 0 },
      //         { y: 0, autoAlpha: 1, duration: 0.8 }, "-=0.5")
      
  }, []);
}