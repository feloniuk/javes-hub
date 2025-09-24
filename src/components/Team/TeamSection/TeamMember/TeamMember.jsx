import Image from 'next/image';
import s from './TeamMember.module.scss';

const TeamMember = ({ name, position, image, hoverImage }) => {
  return (
    <div className={s.memberCard}>
      <div className={s.imagesWrapper}>
        <div className={s.imageWrapper}>
          <Image 
            className={s.memberPhoto} 
            src={image} 
            alt="Team member photo"
            fill={true}
          />
        </div>

        <div className={s.hoverImageWrapper}>
          <Image 
            className={s.memberPhoto} 
            src={hoverImage} 
            alt="Team member photo"
            fill={true}
          />
        </div>
      </div>
      <div className={s.nameBlock}>
        <div className={s.name}>{name}</div>
        <div className={s.position}>{position}</div>
      </div>
    </div>
  )
}

export default TeamMember