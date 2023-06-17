import OALineChart from '@/shared/OALineChart';
import styles from './platform.module.css';
import OAColumnChart from '@/shared/OAColumnChart';

const PlatformPage = () => {
  return (
    <div className={styles.platform}>
      <div className={styles.platform_analytics}>
        <span className={styles.platform_analytics_title}>
          Вся аналитика <br /> в одном кабинете
        </span>
        <span className={styles.platform_analytics_description}>
          Отслеживайте работу голосового ассистента <br /> в личном кабинете
        </span>
      </div>
      <span className={styles.platform_widgets}>
        Уникальные виджеты позволяют настроить <br /> дашборд под задачи
        различных подразделений вашей компании
      </span>
      <div className={styles.platform_charts}>
        <OALineChart />
        <OAColumnChart />
      </div>
    </div>
  );
};

export default PlatformPage;
