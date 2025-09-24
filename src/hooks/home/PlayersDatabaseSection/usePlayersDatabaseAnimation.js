import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const usePlayersDatabaseAnimation = (sectionRef, headingRef, toggleRef, gridRef) => {
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
        toggleRef.current,
        { x: 100, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: 0.8 },
        '-=0.6',
      )
      .fromTo(
        gridRef.current.children,
        { x: 100, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: 0.8, stagger: 0.2 },
        '-=0.6',
      );
  }, [sectionRef, headingRef, toggleRef, gridRef]);
}