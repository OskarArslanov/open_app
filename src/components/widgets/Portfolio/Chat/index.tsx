/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-loop-func */
import { useState } from 'react';
import { delay } from '@/components/shared/utils/delay';
import Title from './Title';
import ChatArea from './ChatArea';
import ChatInput from './ChatInput';
import styles from './Main.module.scss';
import { ChatMessageType } from './ChatMessage';
import { AnimateContainer } from '../../Animations';

const Chat = () => {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [botMessage, setBotMessage] = useState<string>(''); // using for rerender

  const handleSend = async (e: string) => {
    const userMessage = { message: e, owner: 'user' } as ChatMessageType;
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    await delay(1000);
    const botResponse = {
      message: 'some response',
      owner: 'bot',
      isGenerating: true,
    } as ChatMessageType;
    setBotMessage(botResponse.message);
    const withBotMessage = [...newMessages, botResponse];
    setMessages(withBotMessage);
    // const response = (
    //   await axios.get(url, {
    //     params: {
    //       length: '3',
    //       count: '3',
    //     },
    //     headers: {
    //       'X-RapidAPI-Key':
    //         'c8a04fd763msh1df2097123a9b01p1cd44ejsnc7cfc52e0435',
    //       'X-RapidAPI-Host': 'montanaflynn-lorem-text-generator.p.rapidapi.com',
    //     },
    //   })
    // ).data;
  };

  return (
    <AnimateContainer className={styles.Container} style={{ gap: 0 }}>
      <div className={styles.Container_Wrapper}>
        <Title />
        <ChatArea messages={messages} />
        <ChatInput onSend={handleSend} />
      </div>
    </AnimateContainer>
  );
};

export default Chat;
