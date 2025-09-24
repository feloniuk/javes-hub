'use client'
import Image from 'next/image';
import { useRef } from 'react';
import { useAdvertisementSectionAnimation } from '@/hooks/token/AdvertisementSection/useAdvertisementSectionAnimation';
import s from './Advertisement.module.scss';

const Advertisement = () => {
  const containerRef = useRef();
  const headingRef = useRef();
  const textRef = useRef();
  const imageRef = useRef();

  useAdvertisementSectionAnimation(containerRef, headingRef, textRef, imageRef);

  return (
    <section ref={containerRef} className={s.section}>
      <div className="container">
        <div className={s.content}>
          <h2 ref={headingRef} className={`${s.heading} heading-2`}>
            Self <span className="bold">Advertisement</span>
          </h2>

          <p ref={textRef} className={s.text}>
            Pro players can use JVS tokens for self-promotion and ads within the JAVES ecosystem. 
            Top search placement with &quot;ADS&quot; labels, highlighting effects, shout messages, 
            everything that helps PRO players sell their services, are vital for JAVES monetization.
          </p>
        </div>

        <div ref={imageRef} className={s.imageWrapper}>
          <picture>
            <source
              media="(min-width: 480px)"
              srcSet="/assets/token/advertisement/advertisement-desktop.svg"
            />
            <Image
              className={s.image}
              src="/assets/token/advertisement/advertisement-mobile.svg"
              alt="Interactive ad selection menu with costs in JVS coins and a preview of ads in a pro-player listing."
              width={343}
              height={653}
            />
          </picture>
        </div>
      </div>
    </section>
  )
}

export default Advertisement