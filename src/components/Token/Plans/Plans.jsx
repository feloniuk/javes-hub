'use client'
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PlanCard from '@/components/Token/Plans/PlanCard/PlanCard';
import s from './Plans.module.scss';
import plans from './data.json';

const Plans = () => {
  const [activeCardId, setActiveCardId] = useState('epic');
  const containerRef = useRef();
  const headingRef = useRef();
  const textRef = useRef();
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, plans.length);
  }, []);

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
      .fromTo(textRef.current, 
              { x: 100, autoAlpha: 0 }, 
              { x: 0, autoAlpha: 1, duration: 0.8 }, "-=0.6")
      .fromTo(cardRefs.current, 
              { y: 100, autoAlpha: 0 }, 
              { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.2 }, "-=0.6")
  }, []);

  const handleActiveCard = (cardId) => {
    setActiveCardId(cardId);
  };

  return (
    <section ref={containerRef} className={s.section}>
      <div className="container">
        <div className={s.sectionGrid}>
          <div className={s.headingBlock}>
            <h2 ref={headingRef} className={`${s.heading} heading-2`}>
              <span className="bold">Membership Plans</span> for PRO Players
            </h2>

            <p ref={textRef} className={s.text}>
              PRO players can choose from three subscription plans, which they can pay 
              for in JVS tokens, that unlock additional features
            </p>
          </div>

          {plans.map((plan, index) => (
            <div 
              ref={el => cardRefs.current[index] = el} 
              key={plan.id} 
              className={s.cardWrapper}
            >
              <PlanCard
                id={plan.id}
                title={plan.title} 
                price={plan.price} 
                description={plan.description} 
                time={plan.time} 
                discount={plan.discount}
                active={activeCardId === plan.id}
                onHandleActiveCard={handleActiveCard}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Plans