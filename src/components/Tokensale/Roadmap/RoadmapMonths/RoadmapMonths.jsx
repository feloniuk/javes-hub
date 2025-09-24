import s from './RoadmapMonths.module.scss'

const RoadmapMonths = () => {
  return (
    <>
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={`cell-${index}`} className={s.cell}></div>
      ))}
    </>
  )
}

export default RoadmapMonths