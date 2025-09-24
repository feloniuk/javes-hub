import s from './ProPlayersPage.module.scss';

const ProPlayersPage = ({ children }) => {

  return (
    <div className={s.pageWrapper}>
      {children}
    </div>
  );
}

export default ProPlayersPage