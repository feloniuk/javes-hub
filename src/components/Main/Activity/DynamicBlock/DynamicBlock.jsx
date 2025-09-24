import s from './DynamicBlock.module.scss';
import CountUp from 'react-countup';

const DynamicBlock = ({ 
  value, 
  label, 
  isActive, 
  modifier, 
  isDataLoaded 
}) => {
  
  const active = isActive ? 'active' : '';

  return (
    <div className={`${s.dynamicElement} ${s[modifier]} ${s[active]}`}>
      <div className={s.value}>
        {isDataLoaded ? (
          <CountUp 
            end={value}
            decimal=","
            decimals={modifier === 'dealValue' ? 2 : 0}
            prefix={modifier === 'dealValue' ? '$' : ''}
            duration={5}
            enableScrollSpy
            scrollSpyDelay={300}
          />
        ) : ( 0 )}
      </div>

      <div className={s.label}>{label}</div>
    </div>
  )
}

export default DynamicBlock