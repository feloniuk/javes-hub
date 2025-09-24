'use client'
import { zeroPad } from 'react-countdown';
import s from './CountdownTimer.module.scss';

const CountdownTimer = ({ days, hours, minutes, seconds }) => {
  return (
    <div className={s.countdown}>
      <div className={s.timeItem}>
        <div className={s.value}>{days}</div>
        <div className={s.label}>Days</div>
      </div>

      <div className={s.timeBlock}>
        <div className={s.timeItem}>
          <div className={s.value}>{zeroPad(hours)}</div>
          <div className={s.label}>Hours</div>
        </div>

        <span className={s.colon}>:</span>

        <div className={s.timeItem}>
          <div className={s.value}>{zeroPad(minutes)}</div>
          <div className={s.label}>Minutes</div>
        </div>

        <span className={s.colon}>:</span>

        <div className={s.timeItem}>
          <div className={s.value}>{zeroPad(seconds)}</div>
          <div className={s.label}>Seconds</div>
        </div>
      </div>
    </div>
  )
}

export default CountdownTimer