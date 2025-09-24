'use client';
import { useState, useEffect } from 'react';
import { useWindowSize } from 'usehooks-ts';
import Link from 'next/link';
import Logo from '@/components/Common/Logo/Logo';
import SubscribeForm from '@/components/Common/Footer/SubscribeForm/SubscribeForm';
import SocialMedia from '@/components/Common/Footer/SocialMedia/SocialMedia';
import Glow from '@/components/Common/Glow/Glow';
import s from './Footer.module.scss';

const Footer = () => {
  const [deviceType, setDeviceType] = useState('');
  const { width = 0 } = useWindowSize();

  useEffect(() => {
    const updateDeviceType = () => {
      if (width < 768) {
        setDeviceType('Mobile');
      } else if (width >= 768 && width < 1024) {
        setDeviceType('Tablet');
      } else if (width >= 1024 && width < 1200) {
        setDeviceType('Laptop');
      } else {
        setDeviceType('Desktop');
      }
    };

    updateDeviceType();
  }, [width]);

  return (
    <footer className={s.footer}>
      <div className='container'>
        {deviceType === 'Mobile' && (
          <div className={s.footerContainer}>
            <Logo />
            <p className={s.description}>
              All copyrights, trade marks and service marks belong to their corresponding 
              owners. All mentioned brand names and related materials, logos and images 
              are registered property of the respective companies. Javes is not 
              associated with or endorsed by any copyright owner in any way and offers 
              services to players in different online games to make their gaming experience better.
            </p>

            <SubscribeForm />
            <SocialMedia />

            <div className={s.termsBlock}>
              <Link href='/' className={s.termsLink}>
                Privacy
              </Link>
              <Link href='/' className={s.termsLink}>
                Trademark
              </Link>
              <Link href='/' className={s.termsLink}>
                Terms & Conditions
              </Link>
            </div>

            <p className={s.rights}>Javes © 2024. All rights reserved.</p>
          </div>
        )}

        {deviceType === 'Tablet' && (
          <div className={s.footerContainer}>
            <div className={s.topBlock}>
              <Logo />
              <div className={s.ctaBlock}>
                <SubscribeForm />
                <SocialMedia />
              </div>
            </div>

            <div className={s.termsBlock}>
              <Link href='/' className={s.termsLink}>
                Privacy
              </Link>
              <Link href='/' className={s.termsLink}>
                Trademark
              </Link>
              <Link href='/' className={s.termsLink}>
                Terms & Conditions
              </Link>
            </div>

            <p className={s.description}>
              All copyrights, trade marks and service marks belong to their corresponding 
              owners. All mentioned brand names and related materials, logos and images 
              are registered property of the respective companies. Javes is not 
              associated with or endorsed by any copyright owner in any way and offers 
              services to players in different online games to make their gaming experience better.
            </p>

            <p className={s.rights}>Javes © 2024. All rights reserved.</p>
          </div>
        )}

        {deviceType === 'Laptop' && (
          <div className={s.footerContainer}>
            <div className={s.topBlock}>
              <Logo />
              <SubscribeForm />
            </div>

            <div className={s.middleBlock}>
              <div className={s.termsBlock}>
                <Link href='/' className={s.termsLink}>
                  Privacy
                </Link>
                <Link href='/' className={s.termsLink}>
                  Trademark
                </Link>
                <Link href='/' className={s.termsLink}>
                  Terms & Conditions
                </Link>
              </div>

              <SocialMedia />
            </div>

            <div className={s.bottomBlock}>
              <p className={s.description}>
                All copyrights, trade marks and service marks belong to their corresponding 
                owners. All mentioned brand names and related materials, logos and images 
                are registered property of the respective companies. Javes is not 
                associated with or endorsed by any copyright owner in any way and offers 
                services to players in different online games to make their gaming experience better.
              </p>

              <p className={s.rights}>Javes © 2024. All rights reserved.</p>
            </div>
          </div>
        )}

        {deviceType === 'Desktop' && (
          <div className={s.footerContainer}>
            <div className={s.topBlock}>
              <div className={s.leftBlock}>
                <Logo />

                <div className={s.termsBlock}>
                  <Link href='/' className={s.termsLink}>
                    Privacy
                  </Link>
                  <Link href='/' className={s.termsLink}>
                    Trademark
                  </Link>
                  <Link href='/' className={s.termsLink}>
                    Terms & Conditions
                  </Link>
                </div>
              </div>

              <div className={s.rightBlock}>
                <SubscribeForm />
                <SocialMedia />
              </div>
            </div>

            <div className={s.bottomBlock}>
              <p className={s.description}>
                All copyrights, trade marks and service marks belong to their corresponding 
                owners. All mentioned brand names and related materials, logos and images 
                are registered property of the respective companies. Javes is not 
                associated with or endorsed by any copyright owner in any way and offers 
                services to players in different online games to make their gaming experience better.
              </p>

              <p className={s.rights}>Javes © 2024. All rights reserved.</p>
            </div>
          </div>
        )}

        <Glow
          className='bottomGlowWrapper'
          glowLink='/assets/glow/bottom-glow.svg'
        />
      </div>
    </footer>
  );
};

export default Footer;
