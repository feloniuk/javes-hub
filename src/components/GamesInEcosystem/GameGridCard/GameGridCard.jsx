import s from './GameGridCard.module.scss';
import Image from 'next/image';

const GameGridCard = ({
  logo,
  image,
  name,
}) => {
  return (
    <div className={s.gameCard}>
      <div className={s.imagesWrapper}>
        <Image 
          src={logo} 
          alt={`${name} logo`}
          className={s.image}
          width={165}
          height={165}
        />
        {/* <Image 
          src={image}
          alt={`${name} image`} 
          className={s.image}
          width={165}
          height={165}
        /> */}
      </div>

      <p className={s.label}>{name}</p>
    </div>
  )
}

export default GameGridCard