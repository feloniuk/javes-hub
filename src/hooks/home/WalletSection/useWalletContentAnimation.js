import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

export const useWalletContentAnimation = (cardRef, imageRef, contentRef, activeContent) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 70%",
        invalidateOnRefresh: true,
        toggleActions: "play none none none"
      }
    });

    tl.fromTo(cardRef.current, { x: 100, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.8 })
      .fromTo(imageRef.current, { x: -100, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.8 }, "-=0.5")
      .fromTo(contentRef.current, { x: 100, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.8 }, "-=0.5");

    return () => {
      tl.kill();
    } 
  }, [cardRef, imageRef, contentRef, activeContent]);
}