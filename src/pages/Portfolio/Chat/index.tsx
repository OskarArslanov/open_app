import Title from './Title';
import ChatArea, { ChatMessageType } from './ChatArea';
import ChatInput from './ChatInput';
import styles from './Main.module.scss';
import { useState } from 'react';
import { AnimateContainer } from '@/widgets/Animations';

const Chat = () => {
  const url = 'http://185.46.8.130/api/v1/chat/send-message';
  const controller = new AbortController();
  const signal = controller.signal;
  const [messages, setMessages] = useState<ChatMessageType[]>([]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [botMessage, setBotMessage] = useState<string>(''); // using for rerender

  const handleSend = async (e: string) => {
    const userMessage = { message: e, owner: 'user' } as ChatMessageType;
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);

    await fetch(url, {
      signal,
      method: 'POST',
      body: JSON.stringify({ message: e }),
      headers: {
        Accept: 'text/event-stream',
        'Content-Type': 'application/json',
      },
    }).then(async (response) => {
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      const botMessagePos = newMessages.length;
      let isDone = false;
      let message = '';
      while (!isDone) {
        const { value } = await reader!.read();
        const chunk = decoder.decode(value);
        const jsonStrings = chunk.replace(/}\s*{/g, '}\n{').split('\n');
        jsonStrings.forEach((item) => {
          try {
            const obj = JSON.parse(item);
            isDone = obj.status === 'done';

            if (isDone) {
              newMessages[botMessagePos] = {
                ...newMessages[botMessagePos],
                isGenerating: false,
              };
              return;
            }
            message += obj.value;
            newMessages[botMessagePos] = {
              message,
              owner: 'bot',
              isGenerating: true,
            };
            setBotMessage(message);
            setMessages(newMessages);
          } catch (err) {
            console.log('PARSING ERROR! BAD CHUNK: ', item);
            console.log(chunk);
          }
        });
      }
    });
  };

  return (
    <AnimateContainer className={styles.Container}>
      <div className={styles.Container_Wrapper}>
        <Title />
        <ChatArea messages={messages} onStop={() => controller.abort()} />
        {/* <ChatInput onSend={handleSend} /> */}
      </div>
    </AnimateContainer>
  );
};

export default Chat;
