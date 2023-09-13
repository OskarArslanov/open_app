import { useTranslations } from 'next-intl';
import styles from './Title.module.scss';

const Title = () => {
  const t = useTranslations('Portfolio.chat');
  return (
    <div className={styles.Container}>
      <h1>{t('title')}</h1>
      <span>{t('ai')}</span>
    </div>
  );
};

export default Title;
