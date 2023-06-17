import OAButton from '@/shared/OAButton';
import styles from './styles.module.css';

const OAMainOrder = () => {
  return (
    <div className={styles.mainorder_order}>
      <span className={styles.mainorder_order_assistants}>
        <span>Голосовые ассистенты</span>
        <span
          className={styles.mainorder_order_assistants_smartdialogs}
        >
          SmartDialogs
        </span>
      </span>
      <span className={styles.mainorder_order_info}>
        В звонках бот ведёт осмысленный диалог <br/> и совершенно неотличим от живого
        оператора. <br/> Автоматизируйте телефонные звонки с помощью ИИ.
      </span>
      <OAButton size="large" variant="contained">
        Оставить заявку
      </OAButton>
    </div>
  );
};

export default OAMainOrder;
