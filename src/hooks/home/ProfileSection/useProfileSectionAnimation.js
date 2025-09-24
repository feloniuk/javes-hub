import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useProfileSectionAnimation = (containerRef, headingRef, contentRef, imageRef, buttonRef) => {
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
      .fromTo(contentRef.current, 
              { x: 100, autoAlpha: 0 }, 
              { x: 0, autoAlpha: 1, duration: 0.8 }, "-=0.6")
      .fromTo(imageRef.current, 
              { y: 100, autoAlpha: 0 }, 
              { y: 0, autoAlpha: 1, duration: 0.8 }, "-=0.6")
      .fromTo(buttonRef.current, 
              { y: 100, autoAlpha: 0 }, 
              { y: 0, autoAlpha: 1, duration: 0.8 }, "-=0.3")
  }, []);
}