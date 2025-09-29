import s from '../PlayerCard/PlayerCard.module.scss';

const PlayerCardSkeleton = () => {
  return (
    <div className={s.playerCard} style={{ opacity: 0.6 }}>
      <div className={s.avatarWrapper}>
        <div 
          className={s.avatar}
          style={{ 
            background: 'var(--white-10)',
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}
        />
      </div>

      <div 
        className={s.name}
        style={{ 
          background: 'var(--white-10)',
          height: '1.5rem',
          width: '60%',
          borderRadius: '4px',
          margin: '0 auto',
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }}
      />
      <div 
        className={s.deals}
        style={{ 
          background: 'var(--white-10)',
          height: '1.5rem',
          width: '40%',
          borderRadius: '4px',
          margin: '0 auto',
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }}
      />
      <div className={s.ratingWrapper}>
        <div 
          className={s.rating}
          style={{ 
            background: 'var(--white-10)',
            height: '12px',
            borderRadius: '4px',
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}
        />
      </div>
    </div>
  );
}

export default PlayerCardSkeleton;