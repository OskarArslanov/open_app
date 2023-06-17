import Calls from '@/shared/assets/png/Calls.png';
import Dashboard from '@/shared/assets/png/Dashboard.png';
import styles from './auth.module.css';
import Image from 'next/image';

const AuthPageInfo = () => {
  return (
    <div className={`${styles.info} hide__S`}>
      <div className={styles.info_photos}>
        <Image
          src={Calls}
          alt="calls"
          priority
          className={styles.info_photos_calls}
        />
        <Image
          src={Dashboard}
          alt="dashboard"
          priority
          className={styles.info_photos_dashboard}
        />
      </div>
      <div className={styles.info_text}>
        <span className={styles.info_text_title}>
          Вся аналитика в одном кабинете
        </span>
        <span className={styles.info_text_description}>
          Теперь просматривать аналитику и создавать отчёты можно без нашей
          помощи
        </span>
      </div>
    </div>
  );
};

export default AuthPageInfo;
