'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import BlockchainCard from '@/components/Main/Blockchain/BlockchainCard/BlockchainCard';
import { useBlockchainSection } from '@/hooks/home/BlockchainSection/useBlockchainSection'
import cards from '../data.json';
import s from './BlockchainSection.module.scss';

const BlockchainSection = () => {
  const [activeCardId, setActiveCardId] = useState('01');
  const containerRef = useRef();
  const headingRef = useRef();

  useBlockchainSection(containerRef, headingRef);

  const handleActiveCard = (cardId) => {
    setActiveCardId(cardId);
  };

  return (
    <section ref={containerRef} className={s.section}>
      <div className={`${s.sectionWrapper} container`}>
        <h3 ref={headingRef} className={`${s.heading} heading-2`}>
          Blockchain for <br /><span className='bold'>Old-School Gamers</span>
        </h3>

        <div className={s.descriptionWrapper}>
          <h4 className={`${s.subHeading} heading-3`}>
            Blockchain Where It Counts
          </h4>

          <p className={s.description}>
            Web3 gaming is on the rise but struggles to attract old-school gamers 
            due to the inferior quality of current blockchain games. Javes applies 
            blockchain only where it makes sense, seamlessly inviting traditional 
            gamers into the Web3 world.
          </p>

          <div className={s.orbit}>
            <Image
              src='/assets/home/blockchain/circle-1.svg'
              className={s.planet}
              alt='decorative element with the image of an orbit and a circle moving along it'
              width={406}
              height={406}
            />
          </div>
        </div>

        <div className={s.grid}>
          {cards.map((card) => (
            <BlockchainCard
              key={card.id}
              card={card}
              activeCardId={activeCardId}
              onHandleActiveCard={handleActiveCard}
            />
          ))}
        </div>
      </div>

      <div className={s.orbitMobile1}>
        <Image
          src='/assets/home/blockchain/circle-2.svg'
          className={s.planet}
          alt='decorative element with the image of an orbit and a circle moving along it'
          width={768}
          height={768}
        />
      </div>

      <div className={s.orbitMobile2}>
        <Image
          src='/assets/home/blockchain/circle-3.svg'
          className={s.planet}
          alt='decorative element with the image of an orbit and a circle moving along it'
          width={768}
          height={768}
        />
      </div>

      <div className={s.orbitTablet1}>
        <Image
          src='/assets/home/blockchain/circle-4.svg'
          className={s.planet}
          alt='decorative element with the image of an orbit and a circle moving along it'
          width={706}
          height={706}
        />
      </div>

      <div className={s.orbitLaptop1}>
        <Image
          src='/assets/home/blockchain/circle-5.svg'
          className={s.planet}
          alt='decorative element with the image of an orbit and a circle moving along it'
          width={841}
          height={841}
        />
      </div>

      <div className={s.orbitLaptop2}>
        <Image
          src='/assets/home/blockchain/circle-6.svg'
          className={s.planet}
          alt='decorative element with the image of an orbit and a circle moving along it'
          width={706}
          height={706}
        />
      </div>
    </section>
  );
};

export default BlockchainSection;
