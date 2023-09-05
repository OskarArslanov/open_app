'use client';

import OAIconButton from '@/features/controls/OAIconButton';
import { AnimateContainer } from '@/widgets/Animations';
import styled from '@emotion/styled';
import {
  Email,
  GitHub,
  Instagram,
  Telegram,
  WhatsApp,
} from '@mui/icons-material';

const contacts = [
  // {
  //   id: 0,
  //   name: 'Github',
  //   icon: <GitHub />,
  //   href: 'https://github.com/OskarArslanov',
  // },
  {
    id: 1,
    name: 'Telegram',
    icon: <Telegram />,
    href: 'https://t.me/OskarArs',
  },
  {
    id: 2,
    name: 'Instagram',
    icon: <Instagram />,
    href: 'https://www.instagram.com/oskar.ar.storage/',
  },
  {
    id: 3,
    name: 'WhatsApp',
    icon: <WhatsApp />,
    href: 'https://api.whatsapp.com/send?phone=799963359210',
  },
  {
    id: 4,
    name: 'oskararslanov@gmail.com',
    icon: <Email />,
    href: 'mailto: oskararslanov@gmail.com',
  },
];

const ContactList = styled.ul({
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});
const ContactsPage = () => {
  return (
    <AnimateContainer>
      <h1>Contacts</h1>
      {contacts.map((item) => {
        return (
          <OAIconButton
            startIcon={item.icon}
            content={item.name}
            key={item.id}
            href={item.href}
          >
            {item.name}
          </OAIconButton>
        );
      })}
      {/* {MOCK_USERLIST.map((item) => (
        <User>
          <UserData>
            {item.user.name} - {item.user.shortName}
          </UserData>
          <UserData>
            {item.email} - {item.password}
          </UserData>
        </User>
      ))} */}
    </AnimateContainer>
  );
};

export default ContactsPage;
