import Image from 'next/image';
import s from './NewsCard.module.scss';
import Link from 'next/link';

const NewsCard = ({ item }) => {
  const { image, icon, date, title, imageAltText, iconAltText, link } = item;

  return (
    <Link href={link} className={s.slide} target="_blank">
      <div className={s.imageWrapper}>
        <Image 
          className={s.image} 
          src={image} 
          alt={imageAltText} 
          width={200} 
          height={200} 
        />
      </div>
      <div className={s.labelBlock}>
        <Image 
          className={s.labelIcon} 
          src={icon} 
          alt={iconAltText} 
          width={20} 
          height={20} 
        />
        <span className={s.date}>{date}</span>
      </div>
      <div className={s.title}>{title}</div>
    </Link>
  )
}

export default NewsCard