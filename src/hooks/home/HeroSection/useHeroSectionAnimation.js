import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export const useHeroSectionAnimation = (headingRef, descrRef, joinBtnRef, investBtnRef) => {
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" }, delay: 1 });

    tl.fromTo(headingRef.current,
              { x: -50, autoAlpha: 0 },
              { x: 0, autoAlpha: 1, duration: 0.8 })
      .fromTo(descrRef.current,
              { x: 50, autoAlpha: 0 },
              { x: 0, autoAlpha: 1, duration: 0.8 }, "-=0.5")
      .fromTo([joinBtnRef.current, investBtnRef.current],
              { x: (i) => (i === 0 ? -100 : 100), autoAlpha: 0 },
              { x: 0, autoAlpha: 1, duration: 0.8, stagger: 0.2 }, "-=0.5");
  }, [headingRef, descrRef, joinBtnRef, investBtnRef]);
}