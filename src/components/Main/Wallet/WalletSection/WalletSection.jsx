'use client';
import { useState, useMemo, useRef } from 'react';
import WalletNavigation from '@/components/Main/Wallet/WalletNavigation/WalletNavigation';
import WalletContent from '@/components/Main/Wallet/WalletContent/WalletContent';
import { useWalletSectionAnimation } from '@/hooks/home/WalletSection/useWalletSectionAnimation';
import data from '../data.json';
import s from './WalletSection.module.scss';


const WalletSection = () => {
  const [activeNavItem, setActiveNavItem] = useState(data.navigation[0]);

  const sectionRef = useRef();
  const headingRef = useRef();
  const textRef = useRef();

  useWalletSectionAnimation(sectionRef, headingRef, textRef);

  const activeContent = useMemo(
    () => data.content.find((item) => item.title === activeNavItem),
    [activeNavItem],
  );

  return (
    <section ref={sectionRef} className={s.section}>
      <div className='container'>
        <div className={s.headingBlock}>
          <h3 ref={headingRef} className={`${s.heading} heading-2`}>
            Ultimate{' '}
            <span className='bold'>
              Gamer <br /> Wallet
            </span>
          </h3>

          <p ref={textRef} className={s.description}>
            We revolutionize how gamers manage and spend their money. Designed
            for the gaming community, it combines ease of use with powerful
            features for handling in-game transactions, team finances, and
            more—all in one place.
          </p>
        </div>

        <div className={s.mainBlock}>
          {activeNavItem && (
            <WalletNavigation
              activeNavItem={activeNavItem}
              onHandleActiveNavItem={setActiveNavItem}
            />
          )}

          {activeContent && <WalletContent activeContent={activeContent} />}
        </div>
      </div>
    </section>
  );
};

export default WalletSection;
