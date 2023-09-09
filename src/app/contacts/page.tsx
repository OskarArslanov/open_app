'use client';

import OAButton from '@/features/OAButton';
import { AnimateContainer } from '@/widgets/Animations';
import styled from '@emotion/styled';
import { Email, Instagram, Telegram, WhatsApp } from '@mui/icons-material';

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
    href: 'https://wa.me/79963359210',
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
      <ContactList>
        {contacts.map((item) => {
          return (
            <OAButton
              startIcon={item.icon}
              key={item.id}
              variant="ghost"
              href={item.href}
            >
              {item.name}
            </OAButton>
          );
        })}
      </ContactList>
    </AnimateContainer>
  );
};

export default ContactsPage;
