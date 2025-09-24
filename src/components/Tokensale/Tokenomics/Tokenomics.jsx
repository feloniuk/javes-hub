'use client'
import { useState, useRef } from 'react';
import DoughnutChart from '@/components/Tokensale/Tokenomics/DoughnutChart/DoughnutChart';
import TableRow from '@/components/Tokensale/Tokenomics/TableRow/TableRow';
import s from './Tokenomics.module.scss';
import Image from 'next/image';
import rows from './data.json';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

const Tokenomics = () => {
  const [activeId, setActiveId] = useState(null);

  const containerRef = useRef();
  const headingRef = useRef();
  const textRef = useRef();
  const doughnutRef = useRef();
  const tableRef = useRef();

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
      .fromTo(doughnutRef.current, 
              { x: -100, autoAlpha: 0 }, 
              { x: 0, autoAlpha: 1, duration: 0.8 }, "-=0.6")
      .fromTo(tableRef.current, 
              { x: 100, autoAlpha: 0 }, 
              { x: 0, autoAlpha: 1, duration: 0.8 }, "-=0.6")
  }, []);

  const handleHover = (id) => {
    setActiveId(id);
  };

  return (
    <section ref={containerRef} className={s.section}>
      <div className="container">
        <div className={s.headingBlock}>
          <h2 ref={headingRef} className={`${s.heading} heading-2 bold`}>
            JVS Tokenomics
          </h2>

          <p ref={textRef} className={s.text}>
            You can apply for the Token Sale and get a chance for an allocation in our Private Round. 
            If you don&apos;t receive an allocation in the Private Round, don&apos;t despair, you will be able 
            to participate in the next Community Round later this summer.
          </p>
        </div>

        <div className={s.chartBlock}>
          <div ref={doughnutRef} className={s.doughnutBlock}>
            <div className={s.doughnutWrapper}>
              <DoughnutChart
                activeId={activeId}
                onHandleHover={handleHover}
              />
            </div>

            <div className={s.doughnutLabel}>
              <span className={s.boldLabel}>100M</span><br /> JVS Tokens
            </div>

            <div className={s.doughnutCircles}>
              <Image 
                src="/assets/tokensale/tokenomics/tokenomics-circles.svg" 
                alt="Decorative circles"
                fill={true}
              />
            </div>
          </div>

          <div ref={tableRef} className={s.tableBlock} onMouseLeave={() => handleHover(null)}>
            <div className={s.tableHeader}>
              <div className={s.headerItem}>Sale Round</div>
              <div className={s.headerItem}>JVS Tokens</div>
              <div className={s.headerItem}>Supply Percent</div>
              <div className={s.headerItem}>Token Price</div>
            </div>
            
            {rows.map(row => (
              <TableRow
                key={row.id}
                id={row.id}
                onHandleHover={handleHover}
                activeId={activeId}
                round={row.round}
                tokens={row.tokens} 
                percent={row.percent}
                price={row.price}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tokenomics