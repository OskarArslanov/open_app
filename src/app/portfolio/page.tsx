import styles from './portfolio.module.css';

const PortfolioPage = () => {
  return (
    <div className={styles.portfolio}>
      <div className={styles.portfolio_analytics}>
        <span className={styles.portfolio_analytics_title}>
          Вся аналитика в одном кабинете
        </span>
        <span className={styles.portfolio_analytics_description}>
          Отслеживайте работу голосового ассистента в личном кабинете
        </span>
      </div>
      <span className={styles.portfolio_widgets}>
        Уникальные виджеты позволяют настроить дашборд под задачи различных
        подразделений вашей компании
      </span>
    </div>
  );
};

export default PortfolioPage;
