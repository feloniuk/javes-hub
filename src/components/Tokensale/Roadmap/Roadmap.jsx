'use client'
import s from './Roadmap.module.scss';
import { useEffect, useRef } from 'react';
import data from './data.json';
import RoadmapBar from '@/components/Tokensale/Roadmap/RoadmapBar/RoadmapBar';
import RoadmapMonths from '@/components/Tokensale/Roadmap/RoadmapMonths/RoadmapMonths';
import { useDraggable } from "react-use-draggable-scroll";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';


const Roadmap = () => {
  const containerRef = useRef(null);
  const monthRefs = useRef({});
  const sectionRef = useRef();
  const headingRef = useRef();
  const textRef = useRef();
  const { events } = useDraggable(containerRef);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
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
      .fromTo(containerRef.current, 
              { scale: 0.8, autoAlpha: 0 }, 
              { scale: 1, autoAlpha: 1, duration: 0.8 }, "-=0.6")
  }, []);

  useEffect(() => {
    const currentMonth = new Date().getMonth();
    const monthRef = monthRefs.current[currentMonth];

    if (monthRef && containerRef.current) {
      const offsetAdjustment = currentMonth !== 0 ? 70 : 0;
      containerRef.current.scrollLeft = monthRef.offsetLeft - monthRef.offsetWidth + offsetAdjustment;
    }
  }, []);

  return (
    <section ref={sectionRef} className={s.section}>
      <div className="container">
        <div className={s.headingBlock}>
          <h2 ref={headingRef} className={`${s.heading} heading-2 bold`}>
            JVS Roadmap
          </h2>

          <p ref={textRef} className={s.text}>
            You can apply for the Token Sale and get a chance for an allocation in our Private Round. 
            If you don&apos;t receive an allocation in the Private Round, don&apos;t despair, you will be able 
            to participate in the next Community Round later this summer.
          </p>
        </div>

        <div {...events} ref={containerRef} className={s.timelineBlock}>
          <div className={s.row}>
            <div className={s.event}>#Module 1</div>
            <div className={`${s.timeline} ${s.firstTimline}`}>
              <RoadmapMonths />

              {data.Module1.map(event => (
                <RoadmapBar key={event.id} event={event} />
              ))}
            </div>
          </div>

          <div className={s.row}>
            <div className={s.event}>#Module 2</div>
            <div className={s.timeline}>
              <RoadmapMonths />

              {data.Module2.map(event => (
                <RoadmapBar key={event.id} event={event} />
              ))}
            </div>
          </div>

          <div className={s.row}>
            <div className={s.event}>#Module 3</div>
            <div className={s.timeline}>
              <RoadmapMonths />

              {data.Module3.map(event => (
                <RoadmapBar key={event.id} event={event} />
              ))}
            </div>
          </div>

          <div className={s.row}>
            <div className={s.event}>#Module 4</div>
            <div className={s.timeline}>
              <RoadmapMonths />

              {data.Module4.map(event => (
                <RoadmapBar key={event.id} event={event} />
              ))}
            </div>
          </div>

          <div className={s.row}>
            <div className={s.event}>#Module 5</div>
            <div className={`${s.timeline} ${s.lastTimline}`}>
              <RoadmapMonths />

              {data.Module5.map(event => (
                <RoadmapBar key={event.id} event={event} />
              ))}
            </div>
          </div>

          <div className={`${s.row} ${s.dates}`}>
            <div className={s.event}></div>
            <div className={s.datesGrid}>
              {data.months.map((month, index) => (
                <div key={month.id} ref={el => monthRefs.current[index] = el} className={s.date}>{month.name}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Roadmap