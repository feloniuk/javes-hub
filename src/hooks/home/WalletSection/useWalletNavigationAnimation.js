import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useWalletNavigationAnimation = (containerRef, tabMenuRef) => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        toggleActions: "play none none none",
      },
      paused: true
    });

    tl.fromTo(containerRef.current, 
      { autoAlpha: 0 }, 
      { autoAlpha: 1, duration: 0.8 }
    )

    .fromTo(tabMenuRef.current, 
      { x: 100, autoAlpha: 0 }, 
      { x: 0, autoAlpha: 1, duration: 0.8 },
      '-=0.8',
    );
  }, [containerRef, tabMenuRef]); 
}