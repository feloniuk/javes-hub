import Link from 'next/link';
import s from './NavLink.module.scss';

const NavLink = ({ href, text, svgId, onCloseMenu }) => {
  return (
    <Link href={href} className={s.navLink} onClick={onCloseMenu}>
      <div className={s.linkIconWrapper}>
        <svg
          className={s.linkIcon}
          role='img'
          aria-label={`${text} icon`}
        >
          <use xlinkHref={`/assets/sprite.svg#${svgId}`}></use>
        </svg>
      </div>
      <div className={s.linkText}>{text}</div>
    </Link>
  )
}

export default NavLink