import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useRewardsSectionAnimation = (containerRef, leftImageRef, rightImageRef, leftHeadingRef, rightHeadingRef, leftTextRef, rightTextRef) => {
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

    tl.fromTo(leftImageRef.current, 
              { x: -100, autoAlpha: 0 }, 
              { x: 0, autoAlpha: 1, duration: 0.8 })
      .fromTo(rightImageRef.current, 
              { x: 100, autoAlpha: 0 }, 
              { x: 0, autoAlpha: 1, duration: 0.8 }, "<")
      .fromTo(leftHeadingRef.current, 
              { x: -100, autoAlpha: 0 }, 
              { x: 0, autoAlpha: 1, duration: 0.8 }, "-=0.6")
      .fromTo(rightHeadingRef.current, 
              { x: 100, autoAlpha: 0 }, 
              { x: 0, autoAlpha: 1, duration: 0.8 }, "<")
      .fromTo(leftTextRef.current, 
              { x: -100, autoAlpha: 0 }, 
              { x: 0, autoAlpha: 1, duration: 0.8 }, "-=0.6")
      .fromTo(rightTextRef.current, 
              { x: 100, autoAlpha: 0 }, 
              { x: 0, autoAlpha: 1, duration: 0.8 }, "<")
  }, []);
}