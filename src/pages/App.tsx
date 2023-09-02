'use client';

import OAFooterContainer from '@/widgets/OAFooterContainer';
import OAHeaderContainer from '@/widgets/OAHeaderContainer';
import OABodyContainer from '@/widgets/OABodyContainer';
import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import StyledComponentsProvider from '@/shared/providers/StyledComponentsProvider';
import ThemeProvider from '@/shared/providers/ThemeProvider';
import { usePathname } from 'next/navigation';

const Container = styled.main<{ $isAuth: boolean }>`
  height: 100%;
  max-width: 1320px;
  display: flex;
  flex-flow: column;
  width: 100%;
  align-self: center;
  & > * {
    padding: ${(props) => (props.$isAuth ? '0px' : '0 20px')};
  }
`;

const App: FC<PropsWithChildren> = (props) => {
  const segments = usePathname()?.split('/').slice(1);
  const isAuth = segments?.[0] === 'auth' || false;
  return (
    <StyledComponentsProvider>
      <ThemeProvider>
        <Container data-theme="default" $isAuth={isAuth}>
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
