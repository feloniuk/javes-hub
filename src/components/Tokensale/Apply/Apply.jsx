'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import Button from '@/components/Common/Button/Button';
import s from './Apply.module.scss';

const Apply = () => {
  const containerRef = useRef();
  const stepOneRef = useRef();
  const stepTwoRef = useRef();
  const stepThreeRef = useRef();
  const topActiveImageRef = useRef();
  const topDisabledImageRef = useRef();
  const bottomActiveImageRef = useRef();
  const bottomDisabledImageRef = useRef();

  const headingRef = useRef();
  const buttonRef = useRef();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      paused: true
    });

    tl.fromTo(headingRef.current, 
              { x: -100, autoAlpha: 0 }, 
              { x: 0, autoAlpha: 1, duration: 0.8 })
      .fromTo(buttonRef.current, 
              { y: 100, autoAlpha: 0 }, 
              { y: 0, autoAlpha: 1, duration: 0.8 }, "-=0.2")
  }, []);

  useGSAP(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 40%',
          end: 'top 15%',
          scrub: true,
          toggleActions: 'play none none reverse',
        }
      });
  
      tl.fromTo(stepOneRef.current, 
        { backgroundColor: '#EF7271' },
        { backgroundColor: '#ffffff19', duration: 0.3 },
        0
      );
  
      tl.fromTo(stepTwoRef.current, 
        { backgroundColor: 'transparent', borderColor: '#ffffff26', color: '#ffffff7f' },
        { backgroundColor: '#EF7271', borderColor: 'transparent', color: '#ffffff', duration: 0.3 },
        0
      )
      .to(stepTwoRef.current, 
        { backgroundColor: '#ffffff19', duration: 0.3 },
        1
      );
  
      tl.fromTo(stepThreeRef.current, 
        { backgroundColor: 'transparent', borderColor: '#ffffff26', color: '#ffffff7f' },
        { backgroundColor: '#EF7271', borderColor: 'transparent', color: '#ffffff', duration: 0.3 },
        1
      );
  
      tl.fromTo(bottomActiveImageRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3 }, 0)
        .fromTo(bottomDisabledImageRef.current, { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.3 }, 0)
        .fromTo(topActiveImageRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3 }, 1)
        .fromTo(topDisabledImageRef.current, { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.3 }, 1);
  }, []);

  return (
    <section ref={containerRef} className={s.section}>
      <div className="container">
        <h2 ref={headingRef} className={`${s.heading} heading-2`}>
          Apply for <span className="bold">Token Sale</span>
        </h2>

        <div className={s.stepsBlock}>
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="/assets/tokensale/apply/top-active-desktop.svg"
            />
            <Image
              ref={topActiveImageRef}
              className={s.topActiveImg}
              src="/assets/tokensale/apply/left-active-mobile.svg"
              alt=""
              width={63}
              height={298}
            />
          </picture>

          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="/assets/tokensale/apply/top-disabled-desktop.svg"
            />
            <Image
              ref={topDisabledImageRef}
              className={s.topDisabledImg}
              src="/assets/tokensale/apply/left-disabled-mobile.svg"
              alt=""
              width={63}
              height={298}
            />
          </picture>

          <div className={s.stepWrapper}>
            <div ref={stepOneRef} className={`${s.step} ${s.step1}`}>
              <p className={s.stepTitle}>Step 1</p>
              <p className={s.stepText}>Fill out and submit the application form.</p>
            </div>
            <div ref={stepTwoRef} className={`${s.step} ${s.step2}`}>
              <p className={s.stepTitle}>Step 2</p>
              <p className={s.stepText}>Complete the KYC verification.</p>
            </div>
            <div ref={stepThreeRef} className={`${s.step} ${s.step3}`}>
              <p className={s.stepTitle}>Step 3</p>
              <p className={s.stepText}>Wait for an invitation to the Token Sale.</p>
            </div>
          </div>

          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="/assets/tokensale/apply/bottom-active-desktop.svg"
            />
            <Image
              ref={bottomActiveImageRef}
              className={s.bottomActiveImg}
              src="/assets/tokensale/apply/right-active-mobile.svg"
              alt=""
              width={63}
              height={298}
            />
          </picture>

          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="/assets/tokensale/apply/bottom-disabled-desktop.svg"
            />
            <Image
              ref={bottomDisabledImageRef}
              className={s.bottomDisabledImg}
              src="/assets/tokensale/apply/right-disabled-mobile.svg"
              alt=""
              width={63}
              height={298}
            />
          </picture>
        </div>

        <div ref={buttonRef} className={s.btnWrapper}>
          <Button href='/' className='buttonApply'>Apply now</Button>
        </div>
      </div>
    </section>
  )
}

export default Apply
