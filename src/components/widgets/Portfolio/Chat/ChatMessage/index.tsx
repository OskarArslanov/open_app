/* eslint-disable import/no-cycle */
import { FC } from 'react';
import BotIcon from '@mui/icons-material/SmartToy';
import UserIcon from '@mui/icons-material/Person';
import styles from './ChatMessage.module.scss';

export interface ChatMessageType {
  message: string;
  owner: 'bot' | 'user';
  isGenerating?: boolean;
}

interface ChatMessageProps {
  message?: ChatMessageType;
}
const ChatMessage: FC<ChatMessageProps> = (props) => {
  const isBot = props.message?.owner === 'bot';
  return (
    <li
      className={styles.Container}
      style={{ justifyContent: isBot ? 'flex-start' : 'flex-end' }}
    >
      {isBot && (
        <div
          className={styles.Container_Avatar}
          style={{ backgroundColor: 'var(--color-purple_dark)' }}
        >
          <BotIcon style={{ color: 'white' }} />
        </div>
      )}
      <p
        style={{
          backgroundColor: isBot
            ? 'var(--color-purple_light)'
            : 'var(--color-purple_dark)',
          position: 'relative',
          color: isBot
            ? 'var(--color-purple_dark)'
            : 'var(--color-purple_light)',
        }}
      >
        {props.message?.message}
        {/* {isBot && props.message?.isGenerating && (
          <button
            className={styles.Container_BotGenerating}
            onClick={props.onStop}
            type="button"
          >
            stop generating
          </button>
        )} */}
      </p>
      {!isBot && (
        <div
          className={styles.Container_Avatar}
          style={{ backgroundColor: 'var(--color-purple_dark)' }}
        >
          <UserIcon style={{ width: '30px', color: 'white' }} />
        </div>
      )}
    </li>
  );
};

export default ChatMessage;
