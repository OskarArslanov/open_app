'use client';

import { MOCK_USERLIST } from '@/pages/api/auth/login';
import { styled } from 'styled-components';

const UserList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const User = styled.ol`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0 5px;
  border: 1px solid var(--color-primary);
`;

const UserData = styled.div`
  display: flex;
  gap: 10px;
`;

const ContactsPage = () => {
  return (
    <UserList>
      developing...
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
    </UserList>
  );
};

export default ContactsPage;
