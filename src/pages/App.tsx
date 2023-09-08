'use client';

import OAFooterContainer from '@/widgets/OAFooterContainer';
import OAHeaderContainer from '@/widgets/OAHeaderContainer';
import OABodyContainer from '@/widgets/OABodyContainer';
import { FC, PropsWithChildren, useState } from 'react';
import StyledComponentsProvider from '@/shared/providers/StyledComponentsProvider';
import ThemeProvider from '@/shared/providers/ThemeProvider';
import styled from '@emotion/styled';

const Container = styled.main({
  height: '100%',
  display: 'flex',
  flexFlow: 'column',
  backgroundColor: 'var(--text-color-not_primary)',
  color: 'var(--text-color-primary)',
});

const App: FC<PropsWithChildren> = (props) => {
  const [theme, setTheme] = useState('light');
  return (
    <StyledComponentsProvider>
      <ThemeProvider onChange={setTheme}>
        <Container data-theme={theme}>
          <OAHeaderContainer />
          <OABodyContainer>{props.children}</OABodyContainer>
          <OAFooterContainer />
        </Container>
      </ThemeProvider>
    </StyledComponentsProvider>
  );
};
export default App;
