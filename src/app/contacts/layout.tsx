import { FC, PropsWithChildren } from 'react';
import styles from './styles.module.css';

const ContactsLayout: FC<PropsWithChildren> = (props) => {
  return <div>{props.children}</div>;
};

export default ContactsLayout;
