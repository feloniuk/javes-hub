import Image from 'next/image';
import Link from 'next/link';
import s from './Logo.module.scss';

const Logo = () => {
  return (
    <Link href="/" className={s.logoLink}>
      <Image 
        src="/assets/javes-logo.svg" 
        alt="Javes logo" 
        className={s.logo}
        width={48}
        height={48}
      />
    </Link>
  )
}

export default Logo;