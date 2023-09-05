'use client';

import OAFooterContainer from '@/widgets/OAFooterContainer';
import OAHeaderContainer from '@/widgets/OAHeaderContainer';
import OABodyContainer from '@/widgets/OABodyContainer';
import { FC, PropsWithChildren } from 'react';
import StyledComponentsProvider from '@/shared/providers/StyledComponentsProvider';
import ThemeProvider from '@/shared/providers/ThemeProvider';
import { usePathname } from 'next/navigation';
import styled from '@emotion/styled';

const Container = styled.main({
  height: '100%',
  maxWidth: '1320px',
  display: 'flex',
  flexFlow: 'column',
  width: '100%',
  alignSelf: 'center',
  position: 'relative',
  '& > *': {
    padding: '0 20px',
  },
});

const App: FC<PropsWithChildren> = (props) => {
  const segments = usePathname()?.split('/').slice(1);
  const isAuth = segments?.[0] === 'auth' || false;
  return (
    <StyledComponentsProvider>
      <ThemeProvider>
        <Container data-theme="default">
          {isAuth ? (
            props.children
          ) : (
            <>
              <OAHeaderContainer />
              <OABodyContainer>{props.children}</OABodyContainer>
              <OAFooterContainer />
            </>
          )}
        </Container>
      </ThemeProvider>
    </StyledComponentsProvider>
  );
};
export default App;
