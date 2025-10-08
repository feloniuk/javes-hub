import Image from 'next/image';
import Link from 'next/link';
import s from './GamesSectionButton.module.scss';

const GamesSectionButton = ({ 
  href,
  children,
  disabled
}) => {
  return (
    <Link 
      href={href}
      role='button'
      className={`${s.sectionButton} ${disabled ? s.disabled : ''}`}
    >
      <Image
        src='/assets/common/section-button-arrow.svg' 
        alt='Button arrow'
        className={s.arrow}
        width={20}
        height={20}
      />
      <span className={s.text}>
        {children}
      </span>
    </Link>
  );
};

export default GamesSectionButton;