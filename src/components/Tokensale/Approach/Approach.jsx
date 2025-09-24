'use client'
import { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import s from './Approach.module.scss';

const Approach = () => {
  const containerRef = useRef();
  const headingRef = useRef();
  const imageRef = useRef();

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
      .fromTo(imageRef.current, 
              { x: -100, autoAlpha: 0 }, 
              { x: 0, autoAlpha: 1, duration: 0.8 }, "-=0.6")

    ScrollTrigger.refresh()
  }, []);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const animateText = () => {
      const text = new SplitType('#text', { types: 'words, chars' });
    
      gsap.fromTo(text.chars, { opacity: 0.5 }, {
        scrollTrigger: {
          trigger: '#text',
          start: 'top 80%',
          end: 'top 20%',
          scrub: true,
          toggleActions: 'play none none reverse',
          onEnter: () => ScrollTrigger.refresh()
        },
        opacity: 1,
        duration: 0.3,
        stagger: 0.5,
      });
    }

    const animateSVG = (selector, start) => {
      const element = document.getElementById(selector);
      if (!element) return;
      
      gsap.fromTo(element, { opacity: 0.5 }, {
        scrollTrigger: {
          trigger: '#text',
          start: `top ${start}%`,
          end: 'top 20%',
          toggleActions: 'play none none reverse',
        },
        opacity: 1,
        duration: 0.1,
        stagger: 0.5,
      });
    };

    animateText();
    animateSVG('first', 65.7);
    animateSVG('second', 27.6);
  }, []);

  return (
    <section ref={containerRef} className={s.section}>
      <div className="container">
        <h2 ref={headingRef} className={`${s.heading} heading-2`}>
          Our <span className="bold">Approach</span><br /> to <span className="bold">Investment</span>
        </h2>

        <div className={s.contentWrapper}>
          <div ref={imageRef} className={s.imageWrapper}>
            <Image
              className={s.image}
              src="/assets/tokensale/approach/approach.svg"
              alt="Graphic icons"
              width={256}
              height={276}
            />
          </div>

          <p id='text' className={`${s.text} notranslate`}>
            We&apos;re all about the long game, looking for more than just a quick 
            financial boost.{' '}

            <svg
              className={s.icon}
              role='img'
              aria-label='Pouch of money icon'
              id='first'
            >
              <use xlinkHref='/assets/sprite.svg#icon-pouch'></use>
            </svg>

            {' '}We want investors ready to dive deep into what we do, who get 
            excited about our vision and can contribute to our journey.
            <br /><br />

            If you&apos;re about truly understanding and growing with a project,
            we&apos;re excited to meet you.{' '}

            <svg
              className={`${s.icon} ${s.iconSmall}`}
              role='img'
              aria-label='Handshake icon'
              id='second'
            >
              <use xlinkHref='/assets/sprite.svg#icon-handshake'></use>
            </svg>

            {' '}Let&apos;s build something lasting together.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Approach