import { FC } from 'react';
import styles from './ChatMessage.module.scss';
import BotIcon from '@mui/icons-material/SmartToy';
import UserIcon from '@mui/icons-material/Person';
import { ChatMessageType } from '../ChatArea';

interface ChatMessageProps {
  message?: ChatMessageType;
  onStop?: () => void;
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
            ? 'rgba(34, 118, 245, 0.20)'
            : 'var(--color-purple_dark)',
          color: isBot ? '#000' : '#FFF',
          position: 'relative',
        }}
      >
        {props.message?.message}
        {isBot && props.message?.isGenerating && (
          <button
            className={styles.Container_BotGenerating}
            onClick={props.onStop}
          >
            stop generating
          </button>
        )}
      </p>
      {!isBot && (
        <div
          className={styles.Container_Avatar}
          style={{ backgroundColor: 'var(--color-purple_dark)'   }}
        >
          <UserIcon style={{ width: '30px', color: 'white' }} />
        </div>
      )}
    </li>
  );
};

export default ChatMessage;
