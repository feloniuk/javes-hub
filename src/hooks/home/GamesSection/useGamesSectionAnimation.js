import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useGamesSectionAnimation = (sectionRef, headingRef, textRef, gridRef) => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      paused: true,
    });

    tl.fromTo(
      headingRef.current,
      { x: -100, autoAlpha: 0 },
      { x: 0, autoAlpha: 1, duration: 0.8 },
    )
      .fromTo(
        textRef.current,
        { x: 100, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: 0.8 },
        '-=0.6',
      )
      .fromTo(
        gridRef.current.children,
        { y: 100, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.1 },
        '-=0.6',
      );
  }, [sectionRef, headingRef, textRef, gridRef]);
}