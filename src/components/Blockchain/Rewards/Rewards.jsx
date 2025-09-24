'use client'
import Image from 'next/image';
import { useRef } from 'react';
import { useRewardsSectionAnimation } from '@/hooks/blockchain/RewardsSection/useRewardsSectionAnimation';
import s from './Rewards.module.scss';

const Rewards = () => {
  const containerRef = useRef();
  const leftImageRef = useRef();
  const rightImageRef = useRef();
  const leftHeadingRef = useRef();
  const rightHeadingRef = useRef();
  const leftTextRef = useRef();
  const rightTextRef = useRef();

  useRewardsSectionAnimation(
    containerRef,
    leftImageRef,
    rightImageRef,
    leftHeadingRef,
    rightHeadingRef,
    leftTextRef,
    rightTextRef,
  );

  return (
    <section id='onchain-wallet' ref={containerRef} className={s.section}>
      <div className="container">
        <div className={s.contentWrapper}>
          <div className={s.contentBlock}>
            <div ref={leftImageRef} className={s.imageWrapper}>
              <Image
                className={s.image}
                src="/assets/blockchain/rewards/crown.svg"
                alt="Illustration of a luxurious golden crown with a gem at the top and a star on the medallion"
                width={310}
                height={250}
              />
            </div>
          
            <h2 ref={leftHeadingRef} className={`${s.heading} heading-2`}>
              <span className="bold">NFT Rewards</span><br /> for Gamers
            </h2>

            <p ref={leftTextRef} className={s.text}>
              True gamers love to compete against each other or earn challenging in-game achievements.
              One solution that will be implemented on Javes is a reward system for
              players for their gaming achievements, using various crypto-assets in form of tokens or
              games-inspired NFTs. This concept began with the achiefy.io project and will be brought
              to life in Javes.
            </p>
          </div>

          <div className={s.contentBlock}>
            <div ref={rightImageRef} className={s.imageWrapper}>
              <Image
                className={s.image}
                src="/assets/blockchain/rewards/pouch.svg"
                alt="Drawing of a red sack with gold coins spilling out, featuring a hashtag on the front"
                width={310}
                height={250}
              />
            </div>

            <h2 ref={rightHeadingRef} className={`${s.heading} heading-2`}>
              <span className="bold">OnChain</span><br /> Wallet
            </h2>

            <p ref={rightTextRef} className={s.text}>
              As the next step after introducing the &quot;Ultimate Gamers Wallet&quot;, Javes is set to launch an
              OnChain wallet, specifically tailored for gamers ready to fully
              embrace crypto and Web 3.0.
              <br /><br />
              Javes OnChain Wallet is for players who are more advanced and seek a decentralized way to
              store their gaming and crypto assets.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rewards