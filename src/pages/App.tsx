'use client';

import OAFooterContainer from '@/widgets/OAFooterContainer';
import OAHeaderContainer from '@/widgets/OAHeaderContainer';
import OABodyContainer from '@/widgets/OABodyContainer';
import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import StyledComponentsProvider from '@/shared/providers/StyledComponentsProvider';
import ThemeProvider from '@/shared/providers/ThemeProvider';
import { useSelectedLayoutSegment } from 'next/navigation';

const Container = styled.div`
  height: 100%;
  max-width: 1320px;
  display: flex;
  flex-flow: column;
  width: 100%;
  align-self: center;
  & > * {
    height: 100%;
  }
`;

const App: FC<PropsWithChildren> = (props) => {
  const segment = useSelectedLayoutSegment() || '';
  const isAuth = segment === 'auth';
  return (
    <Container data-theme="default">
      <StyledComponentsProvider>
        <ThemeProvider>
          {isAuth ? (
            props.children
          ) : (
            <>
              <OAHeaderContainer />
              <OABodyContainer>{props.children}</OABodyContainer>
              <OAFooterContainer />
            </>
          )}
        </ThemeProvider>
      </StyledComponentsProvider>
    </Container>
  );
};
export default App;
