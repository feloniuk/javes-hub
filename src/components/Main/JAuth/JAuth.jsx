'use client'
import Image from 'next/image';
import { useRef } from 'react';
import { useJAuthSectionAnimation } from '@/hooks/home/JAuthSection/useJAuthSectionAnimation';
import s from './JAuth.module.scss';

const JAuth = ({ children }) => {
  const containerRef = useRef();
  const headingRef = useRef();
  const textRef = useRef();
  const imageRef = useRef();
  const descriptionRef = useRef();

  useJAuthSectionAnimation(containerRef, headingRef, textRef, imageRef, descriptionRef);

  return (
    <section ref={containerRef} className={s.section}>
      <div className="container">
        <div className={s.sectionHeader}>
          <h3 ref={headingRef} className={s.heading}>
            <span className={s.bold}>jAuth</span> <br /> Sign-Up with <span className='bold'>Javes</span>
          </h3>

          <p ref={textRef} className={s.description}>
            Introducing jAuth, the unified authentication solution in the Javes ecosystem.
          </p>
        </div>

        <div className={s.contentBlock}>
          <div ref={imageRef} className={s.graphicBlock}>
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet="/assets/home/jauth/jauth-desktop.svg"
              />
              <Image
                className={s.image}
                src="/assets/home/jauth/jauth-mobile.svg"
                alt="An infographic of jAuth sign-up system, highlighting its unified authentication
                  solution with icons representing different services in the Javes ecosystem."
                width={295}
                height={565}
              />
            </picture>
            
            <div className={s.buttonWrapper}>
              {children}
            </div>
          </div>

          <p ref={descriptionRef} className={s.text}>
            Whether you&apos;re a PRO-Player, Seller, Client, Wallet User, or Crypto User,
            you will be able to sign up and sign in across all applications connected
            to the Javes ecosystem. This unified user system allows us to gather collective
            analytics for enhancing user interactions within the ecosystem.
          </p>
        </div>
      </div>
    </section>
  )
}

export default JAuth