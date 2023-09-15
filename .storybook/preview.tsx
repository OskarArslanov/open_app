import type { Preview } from '@storybook/react';
import '@/app/globals.css';
import React, { useState } from 'react';
// @ts-ignore
import OAThemeSwitchWidget from '@/widgets/OAThemeSwitchWidget';
// @ts-ignore
import ThemeProvider from '@/providers/ThemeProvider';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => {
      const [theme, setTheme] = useState('dark');
      return (
        <ThemeProvider onChange={setTheme}>
          <div data-theme={theme} style={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center'}}>
            <OAThemeSwitchWidget />
            <Story />
          </div>
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
