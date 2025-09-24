import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const useNavbarAnimation = (navRef) => {
  useGSAP(() => {
    gsap.fromTo(navRef.current, 
      { autoAlpha: 0, y: -50 },
      { duration: 1, autoAlpha: 1, y: 0, ease: "power1.out" }
    );
  }, [navRef]);
};

export default useNavbarAnimation;