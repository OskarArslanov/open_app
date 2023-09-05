import { FC, useEffect, useRef } from "react";
import styles from "./ChatArea.module.scss";
import ChatMessage from "../ChatMessage";

export interface ChatMessageType {
  message: string;
  owner: "bot" | "user";
  isGenerating?: boolean;
}

interface ChatAreaProps {
  messages?: ChatMessageType[];
  onStop?: () => void;
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
        <ChatMessage message={item} key={index} onStop={props.onStop} />
      ))}
      <span ref={scrollRef} />
    </ul>
  );
};

export default ChatArea;