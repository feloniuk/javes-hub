import Image from 'next/image';
import s from './PartnerCard.module.scss';

const PartnerCard = ({image, altText, isActive}) => {
  const active = isActive ? 'withBackground' : '';

  return (
    <div className={`${s.card} ${s[active]}`}>
      <div className={s.logoWrapper}>
        <Image 
          className={s.partnerLogo} 
          src={image} 
          alt={altText}
          width={130}
          height={40}
        />
      </div>
    </div>
  )
}

export default PartnerCard