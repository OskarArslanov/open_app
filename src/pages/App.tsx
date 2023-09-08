'use client';

import OAFooterContainer from '@/widgets/OAFooterContainer';
import OAHeaderContainer from '@/widgets/OAHeaderContainer';
import OABodyContainer from '@/widgets/OABodyContainer';
import { FC, PropsWithChildren } from 'react';
import StyledComponentsProvider from '@/shared/providers/StyledComponentsProvider';
import ThemeProvider from '@/shared/providers/ThemeProvider';
import styled from '@emotion/styled';

const Container = styled.main({
  height: '100%',
  display: 'flex',
  flexFlow: 'column',
});

const App: FC<PropsWithChildren> = (props) => {
  return (
    <StyledComponentsProvider>
      <ThemeProvider>
        <Container>
          <OAHeaderContainer />
          <OABodyContainer>{props.children}</OABodyContainer>
          <OAFooterContainer />
        </Container>
      </ThemeProvider>
    </StyledComponentsProvider>
  );
};
export default App;
