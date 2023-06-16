import { FC } from 'react';
import styles from './infocard.module.css';
import OAPaper from '@/shared/OAPaper';

interface OAInfoCardProps {
  title: string;
  description: string;
}
const OAInfoCard: FC<OAInfoCardProps> = (props) => {
  return (
    <OAPaper>
      <span className={styles.OAInfoCard_Title}>{props.title}</span>
      <span className={styles.OAInfoCard_Description}>{props.description}</span>
    </OAPaper>
  );
};

export default OAInfoCard;
