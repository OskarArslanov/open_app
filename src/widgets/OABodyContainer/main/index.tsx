'use client';

import OAInfoCard from '@/widgets/OABodyContainer/main/OAInfoCard';
import OAMainOrder from '@/widgets/OABodyContainer/main/OAMainOrder';
import OAMainPhoto from '@/widgets/OABodyContainer/main/OAMainPhoto';
import styles from './main.module.css';

const MOCK_CardInfo = [
  {
    title: '3 года на рынке',
    description: 'Более 1000 разработанных ботов в РФ и зарубежом',
  },
  {
    title: 'Честная цена',
    description: 'Оплата только за использованные минуты',
  },
  {
    title: 'Скорость',
    description: 'Запускаем проекты за 3 недели, не теряя в качестве',
  },
  {
    title: 'Личный кабинет',
    description: 'Отслеживание результатов звонков в личном кабинете',
  },
];

const Main = () => {
  return (
    <div className={styles.container} >
      <div className={styles.container_infoblock}>
        <OAMainOrder />
        <OAMainPhoto />
      </div>
      <ul className={styles.container_cardlist}>
        {MOCK_CardInfo.map((item) => (
          <OAInfoCard
            description={item.description}
            title={item.title}
            key={item.title}
          />
        ))}
      </ul>
    </div>
  );
};
export default Main;
