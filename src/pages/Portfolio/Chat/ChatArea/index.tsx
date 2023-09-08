import { FC, useEffect, useRef } from 'react';
import styles from './ChatArea.module.scss';
import ChatMessage, { ChatMessageType } from '../ChatMessage';

interface ChatAreaProps {
  messages?: ChatMessageType[];
}
const ChatArea: FC<ChatAreaProps> = (props) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    // @ts-ignore
    scrollRef.current?.scrollIntoView();
  });
  return (
    <ul className={styles.Container}>
      {props.messages?.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ChatMessage message={item} key={index} />
      ))}
      <span ref={scrollRef} />
    </ul>
  );
};

export default ChatArea;
