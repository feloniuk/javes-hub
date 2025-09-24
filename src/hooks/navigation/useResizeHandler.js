import { useEffect } from 'react';

const useResizeHandler = (closeMenu) => {
  useEffect(() => {
    const handleResize = () => {
      closeMenu();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [closeMenu]);
};

export default useResizeHandler;