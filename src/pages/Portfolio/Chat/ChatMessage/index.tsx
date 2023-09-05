import { FC } from 'react';
import styles from './ChatMessage.module.scss';
import BotIcon from '@mui/icons-material/SmartToy';
import UserIcon from '@mui/icons-material/Person';
import { ChatMessageType } from '../ChatArea';

interface ChatMessageProps {
  message: ChatMessageType;
  onStop?: () => void;
}
const ChatMessage: FC<ChatMessageProps> = (props) => {
  const { message, owner, isGenerating } = props.message;
  const isBot = owner === 'bot';
  return (
    <li
      className={styles.Container}
      style={{ justifyContent: isBot ? 'flex-start' : 'flex-end' }}
    >
      {isBot && (
        <div
          className={styles.Container_Avatar}
          style={{ backgroundColor: '#007AFE' }}
        >
          <BotIcon />
        </div>
      )}
      <p
        style={{
          backgroundColor: isBot ? 'rgba(34, 118, 245, 0.20)' : '#007AFE',
          color: isBot ? '#000' : '#FFF',
          position: 'relative',
        }}
      >
        {message}
        {isBot && isGenerating && (
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
          style={{ backgroundColor: '#D3E4FD' }}
        >
          <UserIcon style={{ width: '30px' }} />
        </div>
      )}
    </li>
  );
};

export default ChatMessage;
