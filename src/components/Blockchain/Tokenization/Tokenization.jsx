'use client'
import Image from 'next/image';
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTokenizationAnimation } from '@/hooks/blockchain/TokenizationSection/useTokenizationAnimation';
import s from './Tokenization.module.scss';

const Tokenization = () => {
  const containerRef = useRef();
  const headingRef = useRef();
  const contentRef = useRef();

  useTokenizationAnimation(containerRef, headingRef, contentRef);

  return (
    <section id='items-tokenization' ref={containerRef} className={s.section}>
      <div className="container">
        <h2 ref={headingRef} className={`${s.heading} heading-2`}>
          Game Items <br /> <span className='bold'>Tokenization</span>
        </h2>

        <div ref={contentRef} className={s.wrapper}>
          <div className={s.imageWrapper}>
            <picture>
              <source
                media="(min-width: 1440px)"
                srcSet="/assets/blockchain/tokenization/tokenization-desktop.svg"
              />
              <source
                media="(min-width: 1024px)"
                srcSet="/assets/blockchain/tokenization/tokenization-laptop.svg"
              />
              <source
                media="(min-width: 768px)"
                srcSet="/assets/blockchain/tokenization/tokenization-tablet.svg"
              />
              <Image
                className={s.image}
                src="/assets/blockchain/tokenization/tokenization-mobile.svg"
                alt="A glowing, transparent cube with an axe inside, symbolizing the tokenization of game assets."
                width={343}
                height={877}
                onLoad={() => ScrollTrigger.refresh()}
              />
            </picture>
          </div>

          <p className={s.textLeft}>
            Javes is revolutionizing the ownership and trade of game items from non-blockchain 
            games by enabling their tokenization. Players will have the ability to exchange 
            game items for specialized tokens representing ownership rights, guaranteed 
            by the Javes ecosystem. 
          </p>

          <p className={s.textRight}>
            This allows players to transfer ownership rights to others. The new owner can 
            then utilize their ownership right to obtain the tokenized item in-game 
            from another player possessing the same item, facilitated by the Javes ecosystem. 
          </p>
        </div>
      </div>
    </section>
  )
}

export default Tokenization