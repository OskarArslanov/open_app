'use client';

import OAFooterContainer from '@/widgets/OAFooterContainer';
import OAHeaderContainer from '@/widgets/OAHeaderContainer';
import OABodyContainer from '@/widgets/OABodyContainer';
import { FC, PropsWithChildren, useContext } from 'react';
import StyledComponentsProvider from '@/shared/providers/StyledComponentsProvider';
import ThemeProvider, { ThemeContext } from '@/shared/providers/ThemeProvider';
import styled from '@emotion/styled';

const Container = styled.main({
  height: '100%',
  display: 'flex',
  flexFlow: 'column',
});

const App: FC<PropsWithChildren> = (props) => {
  const themeContext = useContext(ThemeContext);
  return (
    <StyledComponentsProvider>
      <ThemeProvider>
        <Container data-theme={themeContext.theme}>
          <OAHeaderContainer />
          <OABodyContainer>{props.children}</OABodyContainer>
          <OAFooterContainer />
        </Container>
      </ThemeProvider>
    </StyledComponentsProvider>
  );
};
export default App;
