import Image from 'next/image';
import Link from 'next/link';
import s from './SocialMedia.module.scss';

const SocialMedia = () => {
  return (
    <div className={s.mediaContainer}>
      <Link href="https://app.galxe.com/d7iGtZQaeYNj2rNtA6Bo6o" className={s.mediaWrapper} target="_blank">
        <Image 
          className={s.mediaIcon} 
          src="/assets/common/footer/galxe-logo.svg" 
          alt="Galxe profile"
          width={48}
          height={48}
        />
      </Link>

      <Link href="https://x.com/javespr" className={s.mediaWrapper} target="_blank">
        <Image 
          className={s.mediaIcon} 
          src="/assets/common/footer/twitter-logo.svg" 
          alt="Twitter profile"
          width={48}
          height={48}
        />
      </Link>

      <Link href="https://t.me/javespr" className={s.mediaWrapper} target="_blank">
        <Image 
          className={s.mediaIcon} 
          src="/assets/common/footer/telegram-logo.svg" 
          alt="Telegram profile"
          width={48}
          height={48}
        />
      </Link>
    </div>
  )
}

export default SocialMedia;