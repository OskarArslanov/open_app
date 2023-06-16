import styles from './main.module.css';
import OAInfoCard from '@/widgets/OAInfoCard';

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
      <ul className={styles.cardlist}>
        {MOCK_CardInfo.map((item) => (
          <OAInfoCard description={item.description} title={item.title} />
        ))}
      </ul>
    </div>
  );
};
export default Main;
