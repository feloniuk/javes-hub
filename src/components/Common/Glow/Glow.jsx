import Image from 'next/image'
import s from './Glow.module.scss'

const Glow = ({ className, glowLink }) => {
  return (
    <div className={s[className]}>
      <Image 
        className={s.glow} 
        src={glowLink} 
        alt="Decorative glow"
        width={350}
        height={600}
      />
    </div>
  )
}

export default Glow