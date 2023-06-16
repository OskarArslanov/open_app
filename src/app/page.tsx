'use client';

import OAButton from '@/shared/OAButton';
import styles from './main.module.css';
import OAInfoCard from '@/widgets/OAInfoCard';
import Image from 'next/image';
import Photo from '@/shared/assets/png/Photo.png';

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
    <div className={styles.container}>
      <div className={styles.container_infoblock}>
        <div className={styles.container_infoblock_order}>
          <span className={styles.container_infoblock_order_assistants}>
            <span>Голосовые ассистенты</span>
            <span
              className={
                styles.container_infoblock_order_assistants_smartdialogs
              }
            >
              SmartDialogs
            </span>
          </span>
          <span className={styles.container_infoblock_order_info}>
            В звонках бот ведёт осмысленный диалог и совершенно неотличим от
            живого оператора. Автоматизируйте телефонные звонки с помощью ИИ.
          </span>
          <OAButton size="large" variant="contained">
            Оставить заявку
          </OAButton>
        </div>
        <div className={styles.container_infoblock_imageblock}>
          <div className={styles.container_infoblock_imageblock_bg} />
          <Image
            src={Photo}
            alt="photo"
            className={styles.container_infoblock_imageblock_image}
          />
        </div>
      </div>
      <ul className={styles.container_cardlist}>
        {MOCK_CardInfo.map((item) => (
          <OAInfoCard description={item.description} title={item.title} />
        ))}
      </ul>
    </div>
  );
};
export default Main;
