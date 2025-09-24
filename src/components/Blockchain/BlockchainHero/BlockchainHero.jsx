'use client'
import s from './BlockchainHero.module.scss';
// import Button from '@/components/Common/Button/Button';
import { useRef } from 'react';
import { useWindowSize } from 'usehooks-ts';
import Lottie from "lottie-react";
import blockchainLottie from '@/lottie/blockchain/blockchain.json';
import blockchainMobileLottie from '@/lottie/blockchain/blockchain-mobile.json';
import { useBlockchainDeviceType } from '@/hooks/blockchain/HeroSection/useBlockchainDeviceType';
import { useBlockchainHeroAnimation } from '@/hooks/blockchain/HeroSection/useBlockchainHeroAnimation';

const BlockchainHero = () => {
  const headingRef = useRef();
  // const btnRef = useRef();
  const animationRef = useRef();

  const { width } = useWindowSize();
  const deviceType = useBlockchainDeviceType(width);
  useBlockchainHeroAnimation(animationRef, headingRef);

  return (
    <section className={s.sectionWrapper}>
      <div className={s.contentWrapper}>
        <h1 ref={headingRef} className={`${s.heading} heading-1`}>
          <span className={s.gradientTextLeft}>Blockchain Solutions</span>{' '}
          <span className={s.greyText}>for</span><br /> 
          <span className={s.gradientTextRight}>Old-School Gamers</span>
        </h1>

        {/* <div ref={btnRef} className={s.btnWrapper}>
          <Button href='/' className='buttonTokenHero'>Buy JVS Token</Button>
        </div> */}

        <div ref={animationRef} className={s.animationWrapper}>
          {deviceType === 'Mobile' ? (
            <Lottie 
              animationData={blockchainMobileLottie} 
              loop={true}
              className={s.animation}
            />
          ) : (
            <Lottie 
              animationData={blockchainLottie} 
              loop={true}
              className={s.animation}
            />
          )}
        </div>

        <div className={s.gradient}></div>
      </div>
    </section>
  )
}

export default BlockchainHero