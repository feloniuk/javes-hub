'use client'
import Image from 'next/image';
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDealsSectionAnimation } from '@/hooks/token/DealsSection/useDealsSectionAnimation';
import s from './Deals.module.scss';

const Deals = () => {
  const containerRef = useRef();
  const headingRef = useRef();
  const textRef = useRef();
  const imageRef = useRef();

  useDealsSectionAnimation(containerRef, headingRef, textRef, imageRef);

  return (
    <section ref={containerRef} className={s.section}>
      <div className="container">
        <h2 ref={headingRef} className={`${s.heading} heading-2`}>
          Fueling <span className="bold">Matchmaking Deals</span>
        </h2>

        <div className={s.contentWrapper}>
          <div ref={imageRef} className={s.imageWrapper}>
            <picture>
              <source
                media="(min-width: 1200px)"
                srcSet="/assets/token/deals/deals-desktop.svg"
              />
              <source
                media="(min-width: 1024px)"
                srcSet="/assets/token/deals/deals-laptop.svg"
              />
              <source
                media="(min-width: 480px)"
                srcSet="/assets/token/deals/deals-tablet.svg"
              />
              <Image
                className={s.image}
                src="/assets/token/deals/deals-mobile.svg"
                alt="Dual-panel interface with 'Deals matchmaking' section and 'Active Matchmaking' listings for game deals including prices and JVS token fees."
                width={343}
                height={573}
                onLoad={() => ScrollTrigger.refresh()}
              />
            </picture>
          </div>

          <p ref={textRef} className={s.text}>
            To access a Deal via the Matchmaking system, PRO-Players pay a fee in JVS tokens. 
            This fee is charged only if the Deal has been assigned to the PRO-Player. 
            Thus, matchmaking deals require JVS tokens, motivating PRO-Players to buy them regularly.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Deals