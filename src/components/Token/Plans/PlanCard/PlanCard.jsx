// import Link from 'next/link';
import Image from 'next/image';
import { useWindowSize } from 'usehooks-ts';
import s from './PlanCard.module.scss';

const PlanCard = ({ 
  id, 
  title, 
  price, 
  description, 
  time, 
  discount, 
  active, 
  onHandleActiveCard,
}) => {
  const { width } = useWindowSize();
  const breakpoint = 1024;

  const handleClick = () => {
    if (width < breakpoint) {
      onHandleActiveCard(id);
    }
  };

  return (
    <div 
      className={`${s.planCard} ${active ? s.activeCard : ''}`}
      onClick={handleClick}
      onMouseEnter={() => width >= breakpoint && onHandleActiveCard(id)}
    >
      <p className={s.planTitle}>{title}</p>
      {title === 'Starter' ? (
        <p className={s.planPrice}>{price}</p>
      ) : (
        <p className={s.planPrice}>
          <Image 
            className={s.javesIcon} 
            src="/assets/token/plans/javes-logo-icon.svg" 
            alt="Javes logo icon"
            width={28}
            height={28}
          />
          {price}
          <span className={s.month}>/mo</span>
        </p>
      )}
 
      <p className={s.planDescription}>{description}</p>
      {/* <Link 
        href='/'
        className={`${s.selectBtn} ${active ? s.activeBtn : ''}`}
        role='button'
      >
        Select Plan
      </Link> */}

      <div className={s.featuresBlock}>
        <div className={s.featuresItem}>
          <p className={s.featureName}>PRO-Players Profile:</p>
          <Image 
            className={s.featureIcon} 
            src="/assets/token/plans/included-icon.svg" 
            alt="Included feature icon"
            width={40}
            height={40}
          />
        </div>

        <div className={s.featuresItem}>
          <p className={s.featureName}>Deal<br /> Visibility:</p>
          {title === 'Legendary Plan' ? (
            <p className={s.visibilityValue}>
              appears <span className="bold">{time}</span> after publishing
            </p>
          ) : (
            <p className={s.visibilityValue}>
              appears <span className="bold">{time}</span> seconds after publishing
            </p>
          )}
        </div>

        <div className={s.featuresItem}>
          <p className={s.featureName}>Matchmaking Deal Fees Discount:</p>
          {title === 'Starter' ? (
            <Image 
              className={s.featureIcon} 
              src="/assets/token/plans/not-included-icon.svg" 
              alt="Not included feature icon"
              width={40}
              height={40}
            />
          ) : (
            <p className={s.discount}>{discount}</p>
          )}
        </div>

        <div className={s.featuresItem}>
          <p className={s.featureName}>Access to the Seller Chat:</p>
          {title === 'Starter' ? (
            <Image 
              className={s.featureIcon} 
              src="/assets/token/plans/not-included-icon.svg" 
              alt="Not included feature icon"
              width={40}
              height={40}
            />
          ) : (
            <Image 
              className={s.featureIcon} 
              src="/assets/token/plans/included-icon.svg" 
              alt="Included feature icon"
              width={40}
              height={40}
            />
          )}
        </div>

        <div className={s.featuresItem}>
          <p className={s.featureName}>Access to the Calendar Tool:</p>
          {title === 'Starter' ? (
            <Image 
              className={s.featureIcon} 
              src="/assets/token/plans/not-included-icon.svg" 
              alt="Not included feature icon"
              width={40}
              height={40}
            />
          ) : (
            <Image 
              className={s.featureIcon} 
              src="/assets/token/plans/included-icon.svg" 
              alt="Included feature icon"
              width={40}
              height={40}
            />
          )}
        </div>

        <div className={s.featuresItem}>
          <p className={s.featureName}>Badge:</p>
          {title === 'Starter' && (
            <Image 
              className={s.featureIcon} 
              src="/assets/token/plans/not-included-icon.svg" 
              alt="Not included feature icon"
              width={40}
              height={40}
            />
          )}
          {title === 'Epic Plan'  && (
            <p className={`${s.bage} ${s.epic}`}>EPIC</p>
          )}
          {title === 'Legendary Plan' && (
            <p className={`${s.bage} ${s.legend}`}>LEGEND</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default PlanCard