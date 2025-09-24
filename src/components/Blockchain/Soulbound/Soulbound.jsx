'use client'
import Image from 'next/image';
import { useRef } from 'react';
import { useSoulboundAnimation } from '@/hooks/blockchain/SoulboundSection/useSoulboundAnimation';
import s from './Soulbound.module.scss';

const Soulbound = () => {
  const containerRef = useRef();
  const headingRef = useRef();
  const textRef = useRef();
  const imageRef = useRef();

  useSoulboundAnimation(containerRef, headingRef, textRef, imageRef);

  return (
    <section id='soulbound-profile' ref={containerRef} className={s.section}>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.contentWrapper}>
            <h2 ref={headingRef} className={`${s.heading} heading-2`}>
              <span className="bold">Soulbound</span> Gamer <span className="bold"> Profile</span>
            </h2>

            <p ref={textRef} className={s.text}>
              Step one involves Web 2.0 PRO-files. Step two moves to on-chain player profiles 
              using the soul bound tokens system. Each player can create their unique blockchain 
              soul bound profile, serving as their unique identifier or gaming passport. 
              This allows for interaction both within the Javes ecosystem and with other 
              gaming world projects.
            </p>
          </div>

          <div ref={imageRef} className={s.imageWrapper}>
            <Image
              className={s.image}
              src="/assets/blockchain/soulbound/soulbound.svg"
              alt="A stylized illustration of an ancient shield centered with a glowing orb, flanked by two crossed swords against a dark background"
              width={280}
              height={272}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Soulbound