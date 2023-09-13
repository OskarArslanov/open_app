import { useContext } from 'react';
import { ThemeContext } from '@/components/shared/providers/ThemeProvider';
import OASwitch from '.';

const variantsToggle = {
  active: {
    backgroundColor: '#d8f9ff',
  },
  inactive: {
    backgroundColor: '#ffdf22',
    right: 0,
  },
};

const variantsBg = {
  active: {
    backgroundColor: '#000',
  },
  inactive: {
    backgroundColor: '#fff',
  },
};

const OAThemeSwitch = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <OASwitch
      variantsBg={variantsBg}
      variantsToggle={variantsToggle}
      state={themeContext.theme === 'dark'}
      onChange={(e) => themeContext.onChangeTheme(e ? 'dark' : 'light')}
    />
  );
};

export default OAThemeSwitch;
