import Image from 'next/image';
import Link from 'next/link';
import s from './AdvisorCard.module.scss';

const AdvisorCard = ({ name, positionsList, linkedin, xLink, text }) => {
  return (
    <div className={s.card}>
      <div className={s.cardHeadingBlock}>
        <div className={s.name}>{name}</div>
        <div className={s.mediaLinksBlock}>
          {xLink && (
          <Link className={s.mediaLink} href={xLink}>
            <svg
              className={s.mediaIcon}
              role='img'
              aria-label='X icon'
            >
              <use xlinkHref='/assets/sprite.svg#x-icon'></use>
            </svg>
          </Link>
          )}
          
          <Link className={s.mediaLink} href={linkedin}>
            <svg
              className={s.mediaIcon}
              role='img'
              aria-label='LinkedIn icon'
            >
              <use xlinkHref='/assets/sprite.svg#linkedin-icon'></use>
            </svg>
          </Link>
        </div>
      </div>

      <p className={s.text}>
        {text}
      </p>

      {positionsList.map(position => (
        <div key={position.id} className={s.experienceBlock}>
          <div className={s.position}>{position.title}</div>
          <div className={s.logoWrapper}>
            <Image className={s.logo} src={position.logo} alt={position.logoAltText} width={161} height={44} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default AdvisorCard