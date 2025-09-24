'use client'
import Image from 'next/image';
import { useRef } from 'react';
import { useWalletContentAnimation } from '@/hooks/home/WalletSection/useWalletContentAnimation';
import s from './WalletContent.module.scss';

const WalletContent = ({ activeContent }) => {
  const cardRef = useRef();
  const imageRef = useRef();
  const contentRef = useRef();

  const { 
    id,
    title, 
    image, 
    altText, 
    text
  } = activeContent;

  useWalletContentAnimation(cardRef, imageRef, contentRef, activeContent);

  return (
    <div ref={cardRef} className={s.contenCardWrapper}>
      <div ref={imageRef} className={s.imageWrapper}>
        <Image 
          src={image}
          alt={altText}
          width={280}
          height={300}
          className={s.image}
        />
      </div>

      <div ref={contentRef} className={s.contentBlock}>
        <div className={s.label}>{id}</div>
        <h4 className={`${s.contentHeading} heading-4`}>{title}</h4>
        <p className={s.text}>{text}</p>
      </div>
    </div>
  )
}

export default WalletContent