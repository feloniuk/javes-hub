'use client'
import Image from 'next/image';
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCustomizationsSectionAnimation } from '@/hooks/token/CustomizationsSection/useCustomizationsSectionAnimation';
import s from './Customizations.module.scss'

const Customizations = () => {
  const containerRef = useRef();
  const headingRef = useRef();
  const textRef = useRef();
  const imageRef = useRef();

  useCustomizationsSectionAnimation(containerRef, headingRef, textRef, imageRef);

  return (
    <section ref={containerRef} className={s.section}>
      <div className="container">
        <div className={s.sectionWrapper}>
          <h2 ref={headingRef} className={`${s.heading} heading-2`}>
            Paid <span className="bold">PROfile</span> Customizations
          </h2>
          <div ref={imageRef} className={s.imageWrapper}>
            <picture>
              <source
                media="(min-width: 1200px)"
                srcSet="/assets/token/customizations/customizations-desktop.svg"
              />
              <source
                media="(min-width: 1024px)"
                srcSet="/assets/token/customizations/customizations-laptop.svg"
              />
              <source
                media="(min-width: 768px)"
                srcSet="/assets/token/customizations/customizations-tablet.svg"
              />
              <Image
                className={s.image}
                src="/assets/token/customizations/customizations-mobile.svg"
                alt="Profile card of 'ProPlayerX' with icons for custom shop items priced in JVS coins and user stats showcasing top 10 ranking, verification, and trust level."
                width={343}
                height={684}
                onLoad={() => ScrollTrigger.refresh()}
              />
            </picture>
          </div>
          <p ref={textRef} className={s.text}>
            Pro Players will be able to personalize their PROfile by purchasing various
            customization elements, from avatars to different highlighting effects and
            backgrounds, as well as adding widgets or counters of their gaming
            achievements to their profile, using JVS tokens as the payment method.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Customizations