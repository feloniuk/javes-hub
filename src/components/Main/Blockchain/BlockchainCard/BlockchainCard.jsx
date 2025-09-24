'use client';
import { useWindowSize } from 'usehooks-ts';
import s from './BlockchainCard.module.scss';

const BlockchainCard = ({ card, activeCardId, onHandleActiveCard }) => {
  const { width } = useWindowSize();
  const breakpoint = 1024;

  const {
    modifier,
    heading,
    text,
    link,
    id,
  } = card;

  const renderHeading = (headingParts) => {
    return headingParts.map((part, index) =>
      typeof part === 'string' ? (
        part
      ) : (
        <span key={index} className="bold">{part.bold}</span>
      )
    );
  };

  const handleClick = () => {
    if (width < breakpoint) {
      onHandleActiveCard(id);
    }
  };

  return (
    <>
      <div 
        className={`${s.card} ${s[modifier]} ${activeCardId === id ? s.active : ''}`} 
        onClick={handleClick}
        onMouseEnter={() => width >= breakpoint && onHandleActiveCard(id)}
        onMouseLeave={() => width >= breakpoint && onHandleActiveCard(null)}
      >
        <span className={s.number}>{id}</span>
        <h5 className={s.cardTitle}>
          {renderHeading(heading)}
        </h5>

        <p className={s.cardText}>
          {text}
        </p>

        <a href={link} className={s.cardLink}>
          <span className={s.cardLinkText}>Learn more</span>
          
          <svg
            className={s.arrow}
            role='img'
            aria-label='Submit'
          >
            <use xlinkHref='/assets/sprite.svg#submit-arrow'></use>
          </svg>
        </a>
      </div>

      <div className={s.moon}></div>
    </>
  )
}

export default BlockchainCard