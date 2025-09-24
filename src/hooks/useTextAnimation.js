import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type';
    

const useTextAnimation = (svgAnimations) => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const animateText = () => {
      const text = new SplitType('#text', { types: 'words, chars' });
    
      gsap.fromTo(text.chars, { opacity: 0.5 }, {
        scrollTrigger: {
          trigger: '#text',
          start: 'top 80%',
          end: 'top 20%',
          scrub: true,
          toggleActions: 'play none none reverse',
          onEnter: () => ScrollTrigger.refresh()
        },
        opacity: 1,
        duration: 0.3,
        stagger: 0.5,
      });
    }

    const animateSVG = (selector, start) => {
      const element = document.getElementById(selector);
      if (!element) return;
      
      gsap.fromTo(element, { opacity: 0.5 }, {
        scrollTrigger: {
          trigger: '#text',
          start: `top ${start}%`,
          end: 'top 20%',
          toggleActions: 'play none none reverse',
        },
        opacity: 1,
        duration: 0.1,
        stagger: 0.5,
      });
    };

    animateText();
    svgAnimations.forEach(animation => animateSVG(animation.selector, animation.start));
  }, []);
}

export default useTextAnimation;