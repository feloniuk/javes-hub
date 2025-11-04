'use client'
import Image from 'next/image';
import Button from '@/components/Common/Button/Button';
import s from './Profile.module.scss';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
import { useProfileSectionAnimation } from '@/hooks/home/ProfileSection/useProfileSectionAnimation'

const Profile = () => {
  const containerRef = useRef();
  const headingRef = useRef();
  const contentRef = useRef();
  const imageRef = useRef();
  const buttonRef = useRef();

  useProfileSectionAnimation(containerRef, headingRef, contentRef, imageRef, buttonRef);

  return (
    <section ref={containerRef} className={s.section}>
      <div className={`${s.container} container`}>
        <div className={s.content}>
          <h2 ref={headingRef} className={`${s.heading} heading-2`}>
            Join as a <span className='bold'>PRO-Player</span> and&nbsp;Customize
            your <span className='bold'>PROfile</span>
          </h2>

          <p ref={contentRef} className={s.text}>
            If you&apos;re great at online games and want to make money by completing
            game deals, join as a PRO-Player now and customize your PROfile to
            present yourself in the Javes ecosystem.
          </p>
        </div>

        <div ref={imageRef} className={s.imageWrapper}>
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="/assets/home/profile/profile-desktop.svg"
            />
            <Image
              className={s.image}
              src="/assets/home/profile/profile-mobile.svg"
              alt="A mobile interface for Public Profile Settings showing theme color options,
                a sample user profile with status, statistics, and switches for display preferences."
              width={290}
              height={1000}
              onLoad={() => ScrollTrigger.refresh()}
            />
          </picture>
        </div>

        <div ref={buttonRef} className={s.buttonWrapper}>
          <Button
            href='/'
            className='buttonCard'
            disabled
          >
            Create your PROfile
          </Button>
          <span className={s.tempText}>Coming soon</span>
        </div>
      </div>
    </section>
  )
}

export default Profile
