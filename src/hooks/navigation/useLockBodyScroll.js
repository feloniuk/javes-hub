import { useEffect } from 'react';

const useLockBodyScroll = (isOpen) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('noScroll');
    } else {
      document.body.classList.remove('noScroll');
    }

    return () => {
      document.body.classList.remove('noScroll');
    };
  }, [isOpen]);
};

export default useLockBodyScroll;