import Image from 'next/image';
import s from './PlayerCard.module.scss';

const PlayerCard = ({
  avatar,
  name,
  deals,
}) => {
  return (
    <div className={s.playerCard}>
      <div className={s.avatarWrapper}>
        <Image 
          src={avatar} 
          alt='Players avatar'
          className={s.avatar}
          width={72}
          height={72}
        />
      </div>

      <p className={s.name}>{name}</p>
      <p className={s.deals}>{`${deals} Deals`}</p>
      <div className={s.ratingWrapper}>
          <Image 
            src='/assets/home/players/stars.svg' 
            alt="Rating stars" 
            className={s.rating}
            width={82}
            height={12}
          />
      </div>
    </div>
  )
}

export default PlayerCard