import Link from 'next/link';
import s from './Button.module.scss';


const Button = ({ 
  href, 
  className, 
  children, 
  disabled 
}) => {
  return (
    <Link 
      href={href}
      className={`${s[className]} ${disabled ? s.disabled : ''}`}
      role='button'
    >
      {children}
    </Link>
  )
}

export default Button