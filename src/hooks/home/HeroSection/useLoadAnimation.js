import { useEffect, useState } from 'react';

export const useLoadAnimation = (deviceType) => {
  const [animations, setAnimations] = useState({
    topLoopAnim: null,
    topStartAnim: null,
    bottomLoopAnim: null,
    bottomStartAnim: null
  });

  useEffect(() => {
    const loadAnimationData = async (deviceType) => {
      let topLoop, topStart, bottomLoop, bottomStart;
    
      switch (deviceType) {
        case 'Desktop':
          [topLoop, topStart, bottomLoop, bottomStart] = await Promise.all([
            import('@/lottie/main/hero-top-loop-desktop.json'),
            import('@/lottie/main/hero-top-start-desktop.json'),
            import('@/lottie/main/hero-bottom-loop-desktop.json'),
            import('@/lottie/main/hero-bottom-start-desktop.json')
          ]);
          break;
        case 'Tablet':
          [topLoop, topStart, bottomLoop, bottomStart] = await Promise.all([
            import('@/lottie/main/hero-top-loop-tablet.json'),
            import('@/lottie/main/hero-top-start-tablet.json'),
            import('@/lottie/main/hero-bottom-loop-tablet.json'),
            import('@/lottie/main/hero-bottom-start-tablet.json')
          ]);
          break;
        case 'Mobile':
          [topLoop, topStart, bottomLoop, bottomStart] = await Promise.all([
            import('@/lottie/main/hero-top-loop-mobile.json'),
            import('@/lottie/main/hero-top-start-mobile.json'),
            import('@/lottie/main/hero-bottom-loop-mobile.json'),
            import('@/lottie/main/hero-bottom-start-mobile.json')
          ]);
          break;
      }
    
      return { topLoop, topStart, bottomLoop, bottomStart };
    };

    if (deviceType) {
      loadAnimationData(deviceType).then(({ topLoop, topStart, bottomLoop, bottomStart }) => {
        setAnimations({
          topLoopAnim: topLoop,
          topStartAnim: topStart,
          bottomLoopAnim: bottomLoop,
          bottomStartAnim: bottomStart
        });
      });
    }
  }, [deviceType]);

  return animations;
};
