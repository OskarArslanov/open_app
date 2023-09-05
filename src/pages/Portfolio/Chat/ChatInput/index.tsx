import styles from './ChatInput.module.scss';
import { FC, useEffect, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import MailIcon from '@mui/icons-material/Mail';
import { delay } from '@/shared/utils/delay';
import OAInput from '@/shared/controls/OAInput';
import OAForm from '@/shared/controls/OAForm';
import OAButton from '@/shared/controls/OAButton';
import { animate } from 'framer-motion';

interface ChatInputProps {
  onSend?: (data: string) => void;
}

const ChatInput: FC<ChatInputProps> = (props) => {
  const [message, setMessage] = useState<string>('');
  const [clicked, setClicked] = useState(false);

  const handleSend = async () => {
    console.log(1);
    if (!message.length) return;
    props.onSend?.(message);
    setMessage('');
    setClicked(true);
    await delay(500);
    setClicked(false);
  };
  const send = document.getElementById('send');
  const mail = document.getElementById('mail');

  useEffect(() => {
    console.log(clicked);
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

  console.log(!!message.length);
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
