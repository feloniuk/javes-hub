import Link from 'next/link';
import s from './Button.module.scss';


const Button = ({ 
  href, 
  target,
  rel,
  className, 
  children, 
  disabled 
}) => {
  return (
    <Link 
      href={href}
      target={target}
      rel={rel}
      className={`${s[className]} ${disabled ? s.disabled : ''}`}
      role='button'
    >
      {children}
    </Link>
  )
}

export default Button