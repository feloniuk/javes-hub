import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const useMobileMenuAnimation = (isOpen) => {
  useGSAP(() => {
    if(isOpen) {
      const tl = gsap.timeline();

      tl.fromTo('#menu', { height: '0vh' }, { height: '100vh', duration: 0.7, ease: 'power2.out' })
        .fromTo('#backgroundTop', { translateY: '-100%' }, { translateY: '0', duration: 0.7, ease: 'power2.out' }, 0);

      tl.fromTo('#button', {  autoAlpha: 0, translateY: '20px' }, {  autoAlpha: 1, translateY: '0', duration: 0.5 }, '+=0.1')
        .fromTo('#menuList', { autoAlpha: 0, width: '0' }, { autoAlpha: 1, width: '100%', duration: 0.5 }, '-=0.7');

      document.querySelectorAll('[data-link]').forEach((el) => {
        tl.fromTo(el, {  autoAlpha: 0, translateY: '20px' }, {  autoAlpha: 1, translateY: '0', duration: 0.2, ease: 'power1.out' });
      });
    }
  }, [isOpen]);
};

export default useMobileMenuAnimation;