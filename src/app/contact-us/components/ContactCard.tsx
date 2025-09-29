"use client";

import Image from 'next/image';
import { useTranslation } from '@/app/i18n/client';

const socialMedia = [
  { media: 'galaxy-store', url: 'https://app.galxe.com/d7iGtZQaeYNj2rNtA6Bo6o'},
  { media: 'twitter',  url: 'https://x.com/javespr'},
  { media: 'telegram',  url: 'https://t.me/javespr'},
  { media: 'medium',  url: 'https://javespr.medium.com/'},
]

export const ContactCard = () => {
  const { t } = useTranslation('contact_us', { lng: 'en' });

 return  <div className={'flex flex-col relative p-6 w-[343px] tablet:w-[672px] laptop:w-[912px] desktop:w-[396px] m-auto'}>
   <div className={'absolute inset-0 z-10'}>
    <Image className={'tablet:hidden block'} src={'/assets/contact-us/contact-card/mobile.svg'} alt={'mobile-contact-card'} aria-hidden={'true'} width={343} height={333}/>
    <Image className={'hidden tablet:block laptop:hidden'} src={'/assets/contact-us/contact-card/tablet.svg'} alt={'tablet-contact-card'} aria-hidden={'true'} width={672} height={251}/>
    <Image className={'hidden laptop:block desktop:hidden'} src={'/assets/contact-us/contact-card/laptop.svg'} alt={'laptop-contact-card'} aria-hidden={'true'} width={912} height={252}/>
    <Image className={'hidden desktop:block'} src={'/assets/contact-us/contact-card/desktop.svg'} alt={'desktop-contact-card'} aria-hidden={'true'} width={396} height={652}/>
   </div>
   <div className={'z-20'}>
     <h2 className={'text-body-l-desktop mb-4 text-primary-white tablet:mt-10 desktop:mt-80'}>{t('contact-card.title')}</h2>
     <ul className={'flex gap-4 tablet:gap-x-28 laptop:gap-x-32 flex-wrap'}>
       {socialMedia.map(({ media, url }) => (
         <li key={media} className={'w-full tablet:w-[40%] laptop:w-[33%] desktop:w-full flex-shrink-0'}>
           <a href={url} target={'_blank'} rel={'noreferrer'} className={'text-white text-body-s-desktop flex gap-x-4 items-center truncate'}>
             <Image src={`/assets/contact-us/social-media/${media}.svg`} alt={media} width={48} height={48}/>
             <p className={'truncate'}>{url}</p>
           </a>
         </li>
       ))}
     </ul>
   </div>
  </div>
}
