import Image from 'next/image';
import Link from 'next/link';
import formatDate from '@/lib/formatDate';
import formatEarnedText from '@/lib/formatEarnedText';
import s from './ProPlayerCard.module.scss';

const ProPlayerCard = ({ player }) => {
  const {
    name, 
    avatar, 
    totalCompletedPrice, 
    completedDealsCount, 
    assignedDealsCount, 
    lastDealDate
  } = player;

  return (
    <Link href="/pro-players" className={s.playerCard}>
      <div className={s.imageBlock}>
        <Image 
          className={s.ellipse} 
          src="/assets/pro-players/ellipse.svg" 
          alt="Decorative frame" 
          width={72} 
          height={72} 
        />
        <div className={s.imageWrapper}>
          <Image 
            className={s.avatar} 
            src={avatar ? `https://adm.mmonster.co${avatar.thumbnail.url}` : "/assets/pro-players/avatar-helmet.svg"} 
            alt="Avatar" 
            width={60} 
            height={60} 
          />
        </div>
      </div>

      <div className={s.name}>{name}</div>

      <div className={s.dealsBlock}>
        <div className={s.dealsType}>
          <div className={s.value}>{completedDealsCount}</div>
          <div className={s.label}>Deals done</div>
        </div>

        <div className={s.dealsType}>
          <div className={s.value}>{assignedDealsCount}</div>
          <div className={s.label}>Active Deals</div>
        </div>
      </div>

      <div className={s.earnBlock}>
        <div className={s.label}>Earned</div>
        <div className={s.amount}>{formatEarnedText(totalCompletedPrice)}</div>
      </div>

      <div className={s.latestBlock}>
        <div className={s.label}>Latest Deal</div>
        <div className={s.date}>{formatDate(lastDealDate)}</div>
      </div>
    </Link>
  )
}

export default ProPlayerCard