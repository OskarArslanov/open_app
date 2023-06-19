'use client';

import OAFooterContainer from '@/widgets/OAFooterContainer';
import OAHeaderContainer from '@/widgets/OAHeaderContainer';
import OABodyContainer from '@/widgets/OABodyContainer';
import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import StyledComponentsProvider from '@/shared/providers/StyledComponentsProvider';
import ThemeProvider from '@/shared/providers/ThemeProvider';
import { useSelectedLayoutSegment } from 'next/navigation';

const Container = styled.main`
  height: 100%;
  max-width: 1320px;
  display: flex;
  flex-flow: column;
  width: 100%;
  align-self: center;
`;

const App: FC<PropsWithChildren> = (props) => {
  const segment = useSelectedLayoutSegment() || '';
  const isAuth = segment === 'auth';
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
