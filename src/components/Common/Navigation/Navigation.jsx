'use client'
import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import useHamburgerAnimation from '@/hooks/navigation/useHamburgerAnimation';
import useMobileMenuAnimation from '@/hooks/navigation/useMobileMenuAnimation';
import useLockBodyScroll from '@/hooks/navigation/useLockBodyScroll';
import useNavbarAnimation from '@/hooks/navigation/useNavbarAnimation';
import useResizeHandler from '@/hooks/navigation/useResizeHandler';
import menuItems from './data.json';
import s from './Navigation.module.scss';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // оставляем для ховера
  const navRef = useRef(null);
  const pathname = usePathname();

  useNavbarAnimation(navRef);
  useHamburgerAnimation(isOpen);
  useMobileMenuAnimation(isOpen);
  useLockBodyScroll(isOpen);

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveMenu(null);
  };
  
  useResizeHandler(closeMenu);

  return (
    <nav ref={navRef} className={s.navigation}>
      <div className="container">
        <div className={s.navWrapper}>
          <Link href="/" className={s.logoLink} onClick={closeMenu}>
            <Image 
              src="/assets/javes-logo.svg" 
              alt="Javes logo" 
              className={s.logo}
              width={48}
              height={48}
            />
          </Link>

          <ul className={s.navMenu}>
            {menuItems.map(item => (
              <li 
                key={item.id} 
                className={`${s.dropdown} ${activeMenu === item.id ? s.active : ''}`}
                onMouseEnter={() => setActiveMenu(item.id)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link 
                  href={item.href} 
                  className={`${s.dropdownItem} ${pathname === item.href ? s.currentPage : ''}`}
                  onClick={closeMenu}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>

          <Link 
            href='/signup'
            className={s.navButton}
            role='button'
          >
            Log In
          </Link>

          <div className={s.hamburger} role='button' onClick={toggleMenu}>
            <span id='bar1' className={s.bar1}></span>
            <span id='bar2' className={s.bar2}></span>
            <span id='bar3' className={s.bar3}></span>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className={s.mobileMenu} id='menu'>
          <Image
            className={s.backgroundTop}
            src="/assets/common/navigation/tablet-top.webp"
            alt="Composition of square icons of different colours"
            width={768}
            height={250}
            id='backgroundTop'
          />

          <ul className={s.mobileNavMenu} id='menuList'>
            {menuItems.map(item => (
              <li key={item.id} className={s.mobileNavItem}>
                <Link 
                  href={item.href}
                  className={s.mobileNavLink}
                  onClick={closeMenu}
                  data-link={item.id} 
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>

          <Image
            className={s.backgroundBottom}
            src="/assets/common/navigation/tablet-bottom.webp"
            alt="Composition of square icons of different colours"
            width={768}
            height={250}
          />
        </div>
      )}
    </nav>
  )
}

export default Navigation