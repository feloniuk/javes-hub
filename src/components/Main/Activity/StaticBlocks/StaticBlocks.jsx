import s from './StaticBlocks.module.scss';

const StaticBlocks = ({ modifier }) => {
  return (
    <div className={`${s.staticElement} ${s[modifier]}`}></div>
  )
}

export default StaticBlocks