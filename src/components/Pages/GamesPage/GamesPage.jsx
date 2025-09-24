import s from './GamesPage.module.scss';

const GamesPage = ({ children }) => {

  return (
    <div className={s.pageWrapper}>
      {children}
    </div>
  );
}

export default GamesPage