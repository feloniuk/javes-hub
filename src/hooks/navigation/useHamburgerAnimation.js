import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const useHamburgerAnimation = (isOpen) => {
  useGSAP(() => {
    if (isOpen) {
      gsap.to('#bar1', { duration: .3, width: '30px', top: '50%', rotate: '45deg' });
      gsap.to('#bar2', { duration: 0, opacity: 0 });
      gsap.to('#bar3', { duration: .3, width: '30px', top: '50%', rotate: '-45deg' });
    }

    if (!isOpen) {
      gsap.to('#bar1', { duration: .3, width: '26px', top: '0%', rotate: '0deg' });
      gsap.to('#bar2', { duration: .3, width: '26px', top: '45%', opacity: 1 });
      gsap.to('#bar3', { duration: .3, width: '26px', top: '90%', rotate: '0deg' });
    }
  }, [isOpen]);
};

export default useHamburgerAnimation;