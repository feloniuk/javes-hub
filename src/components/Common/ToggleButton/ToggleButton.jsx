import s from './ToggleButton.module.scss';

const ToggleButton = ({ 
  btnClass, 
  iconClass, 
  isActive, 
  onToggle, 
  iconHref, 
  label, 
}) => {
  return (
    <button 
      type='button' 
      className={`${s[btnClass]} ${isActive ? s.active : ''}`}
      onClick={onToggle}
    >
      <svg
        className={s[iconClass]}
        role='img'
        aria-label={`${label} icon`}
      >
        <use xlinkHref={iconHref}></use>
      </svg>

      <span className={s.buttonText}>{label}</span>
    </button>
  )
}

export default ToggleButton