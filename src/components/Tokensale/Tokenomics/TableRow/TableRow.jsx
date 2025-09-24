import s from './TableRow.module.scss'

const TableRow = ({ id, onHandleHover, activeId, round, tokens, percent, price }) => {
  return (
    <div 
      id={id}
      onMouseEnter={() => onHandleHover(id)} 
      className={`${s.tableRows} ${activeId === id ? s.active : activeId !== null ? s.disabled : ''}`}
    >
      <div className={s.rowItem}>
        <span className={s.rowItemColor}></span>
        {round}
      </div>

      <div className={s.rowItem}>
        <span className={s.rowItemLabel}>JVS Tokens</span>
        {tokens}
      </div>

      <div className={s.rowItem}>
        <span className={s.rowItemLabel}>Supply Percent</span>
        {percent}
      </div>
      
      <div className={s.rowItem}>
        <span className={s.rowItemLabel}>Token Price</span>
        {price}
      </div>
    </div>
  )
}

export default TableRow