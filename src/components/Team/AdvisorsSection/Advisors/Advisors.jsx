'use client'
import AdvisorCard from '@/components/Team/AdvisorsSection/AdvisorCard/AdvisorCard';
import s from './Advisors.module.scss';
import advisors from './data.json';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Advisors = () => {
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
        Array.from(gridRef.current.children).filter(child => !child.classList.contains(`${s.divider}`)),
        { y: 100, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.1 },
        '-=0.6',
      )
      .fromTo(
        Array.from(gridRef.current.children).filter(child => child.classList.contains(`${s.divider}`)),
        { height: 0 },
        { height: "100%", duration: 0.6, stagger: 0.1 },
        '-=0.8',
      )
  }, []);

  const dividers = 5;

  return (
    <section ref={sectionRef} className={s.section}>
      <div className="container">
        <div className={s.headingBlock}>
          <h2 ref={headingRef} className={`${s.heading} heading-2`}>
            Our <span className="bold">Advisors</span>
          </h2>

          <p ref={textRef} className={s.text}>
            Pro players can use JVS tokens for self-promotion and ads within the JAVES ecosystem. 
            Top search placement with &quot;ADS&quot; labels, highlighting effects, shout messages, 
            everything that helps PRO players sell their services, are vital for JAVES monetization.
          </p>
        </div>

        <div ref={gridRef} className={s.grid}>
          {advisors.map((advisor, index) => (
            <>
              <AdvisorCard
                key={advisor.id}
                name={advisor.name} 
                positionsList={advisor.positionsList} 
                linkedin={advisor.linkedin} 
                xLink={advisor.xLink}
                text={advisor.text}
              />

              {index < dividers && (
                <div className={`${s.divider} ${s['divider' + (index + 1)]}`} />
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Advisors