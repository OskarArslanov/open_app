import { FC, useEffect, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import MailIcon from '@mui/icons-material/Mail';
import { delay } from '@/shared/utils/delay';
import { animate } from 'framer-motion';
import OAButton from '@/features/OAButton';
import OAForm from '@/features/OAForm';
import OAInput from '@/features/OAInput';
import styles from './ChatInput.module.scss';

interface ChatInputProps {
  onSend?: (data: string) => void;
}

const ChatInput: FC<ChatInputProps> = (props) => {
  const [message, setMessage] = useState<string>('');
  const [clicked, setClicked] = useState(false);

  const handleSend = async () => {
    props.onSend?.(message);
    setMessage('');
    setClicked(true);
    await delay(500);
    setClicked(false);
  };

  useEffect(() => {
    const send = document?.getElementById('send');
    const mail = document?.getElementById('mail');
    if (!send || !mail) return;
    if (clicked) {
      animate([
        [send, { opacity: 0 }, { duration: 0.25 }],
        [mail, { opacity: 1 }, { duration: 0.25, at: 0 }],
        [mail, { transform: 'translate(50px)' }, { duration: 0.25 }],
      ]);
    } else {
      animate([
        [mail, { opacity: 0 }],
        [send, { opacity: 1 }],
        [mail, { transform: 'translate(0px)' }],
      ]);
    }
  }, [clicked]);

  return (
    <OAForm
      onSubmit={handleSend}
      className={styles.Container}
      style={{ flexDirection: 'row' }}
    >
      <OAInput
        type="text"
        fullWidth
        placeholder="Start typing here..."
        value={message}
        name="message"
        onChange={setMessage}
        style={{ padding: '4px' }}
        endAdornment={
          <OAButton
            id="send-button"
            type="submit"
            disabled={!message.length}
            style={{
              borderRadius: '50%',
              minHeight: '40px',
              maxHeight: '40px',
              minWidth: '40px',
              maxWidth: '40px',
              padding: 0,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <MailIcon id="mail" style={{ position: 'absolute', opacity: 0 }} />
            <SendIcon id="send" style={{ position: 'absolute', opacity: 1 }} />
          </OAButton>
        }
      />
    </OAForm>
  );
};

export default ChatInput;
