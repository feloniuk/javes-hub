'use client'
import Image from 'next/image';
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePurchasingSectionAnimation } from '@/hooks/token/PurchasingSection/usePurchasingSectionAnimation'
import s from './Purchasing.module.scss';

const Purchasing = () => {
  const containerRef = useRef();
  const headingRef = useRef();
  const textRef = useRef();
  const imageRef = useRef();

  usePurchasingSectionAnimation(containerRef, headingRef, textRef, imageRef);

  return (
    <section ref={containerRef} className={s.section}>
      <div className="container">
        <h2 ref={headingRef} className={`${s.heading} heading-2`}>
          Purchasing the <span className="bold">JVS Token</span> as a <span className="bold">PRO-Player</span>
        </h2>

        <div className={s.contentWrapper}>
          <div ref={imageRef} className={s.imageWrapper}>
            <picture>
              <source
                media="(min-width: 480px)"
                srcSet="/assets/token/purchasing/purchasing-desktop.svg"
              />
              <Image
                className={s.image}
                src="/assets/token/purchasing/purchasing-mobile.svg"
                alt="Interface showcasing JVS cryptocurrency balance top-up and market price chart."
                width={343}
                height={478}
                onLoad={() => ScrollTrigger.refresh()}
              />
            </picture>
          </div>

          <p ref={textRef} className={s.text}>
            The JVS token is mainly for PRO Players to promote themselves in the Javes ecosystem. 
            Most players might not know much about blockchain, so they can use the token easily 
            through a Web2 UI. Players can also buy the token without a blockchain wallet, 
            but at a fixed, higher price. Tokens bought this way will be locked for withdrawal and 
            only used for self-promotion.
            <br /><br />
            Advanced players ready for Web3 can freely buy the token on the market and use it in the 
            Javes ecosystem.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Purchasing