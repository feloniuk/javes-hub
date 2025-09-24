import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useBlockchainSection = (containerRef, headingRef) => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      paused: true,
    });

    tl.fromTo(
      containerRef.current,
      { scale: 0.5, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, duration: 0.8 },
    ).fromTo(
      headingRef.current,
      { x: -100, autoAlpha: 0 },
      { x: 0, autoAlpha: 1, duration: 0.6 },
      '-=0.2',
    );
  }, [containerRef, headingRef]);
}