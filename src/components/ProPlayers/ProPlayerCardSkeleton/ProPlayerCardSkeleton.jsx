import s from './ProPlayerCardSkeleton.module.scss';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const ProPlayerCardSkeleton = () => {
  const cards = 15;
  return (
    <SkeletonTheme 
      baseColor="#ffffff19" 
      highlightColor="#ffffff0c" 
      borderRadius='0.5rem'
    >
      <div className={s.grid}>
        {Array(cards).fill(0).map((_, index) => (
          <div key={index} className={s.card}>
            <Skeleton circle width={72} height={72} />
            <Skeleton width='75%' />
            <Skeleton height={70} />
            <Skeleton count={2} />
            <Skeleton count={2} />
          </div>
        ))}
      </div>
    </SkeletonTheme>
  )
}

export default ProPlayerCardSkeleton