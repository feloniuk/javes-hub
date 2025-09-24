import Image from 'next/image';
import Link from 'next/link';
import s from './MainTeamMember.module.scss';

const MainTeamMember = ({ 
  name,
  position,
  text,
  image,
  hoverImage,
  linkedin,
  modifier,
}) => {
  return (
    <div className={`${s.mainMemberCard} ${s[modifier]}`}>
      <div className={s.imagesWrapper}>
        <div className={s.mainImageWrapper}>
          <Image
            className={s.mainMemberPhoto}
            src={image}
            alt="Team member photo"
            fill={true}
          />
        </div>

        {hoverImage && (
          <div className={s.hoverImageWrapper}>
            <Image 
              className={s.mainMemberPhoto} 
              src={hoverImage} 
              alt="Team member photo"
              fill={true}
            />
          </div>
        )}
      </div>


      <div className={s.mainInfo}>
        <div className={s.infoHeading}>
          <div className={s.mainNameBlock}>
            <div className={s.mainName}>{name}</div>
            <div className={s.mainPosition}>{position}</div>
          </div>

          <Link className={s.linkedinLink} href={linkedin}>
            <svg
              className={s.linkedinIcon}
              role='img'
              aria-label='LinkedIn icon'
            >
              <use xlinkHref='/assets/sprite.svg#linkedin-icon'></use>
            </svg>
          </Link>
        </div>

        <p className={s.infoText}>{text}</p>
      </div>
    </div>
  )
}

export default MainTeamMember