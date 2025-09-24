'use client';
import s from './Partners.module.scss';
import { useEffect, useState } from 'react';
import PartnerCard from '@/components/Team/PartnersSection/PartnerCard/PartnerCard';
import partners from './data.json';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Partners = () => {
  const [activeId, setActiveId] = useState('01');

  const sectionRef = useRef();
  const headingRef = useRef();
  const textRef = useRef();
  const gridRef = useRef();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      paused: true,
    });

    tl.fromTo(
      headingRef.current,
      { x: -100, autoAlpha: 0 },
      { x: 0, autoAlpha: 1, duration: 0.8 },
    )
      .fromTo(
        textRef.current,
        { x: 100, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: 0.8 },
        '-=0.6',
      )
      .fromTo(
        gridRef.current.children,
        { scale: 0.5, autoAlpha: 0 },
        { scale: 1, autoAlpha: 1, duration: 0.6 },
        '-=0.6',
      );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * partners.length);
      setActiveId(partners[randomIndex].id);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className={s.section}>
      <div className='container'>
        <div className={s.headingBlock}>
          <h2 ref={headingRef} className={`${s.heading} heading-2`}>
            Our <span className='bold'>Investors & Partners</span>
          </h2>

          <p ref={textRef} className={s.text}>
            Pro players can use JVS tokens for self-promotion and ads within the
            JAVES ecosystem. Top search placement with &quot;ADS&quot; labels,
            highlighting effects, shout messages, everything that helps PRO
            players sell their services, are vital for JAVES monetization.
          </p>
        </div>

        <div ref={gridRef} className={s.grid}>
          {partners.map((partner) => (
            <PartnerCard
              key={partner.id}
              image={partner.image}
              altText={partner.altText}
              isActive={activeId === partner.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
