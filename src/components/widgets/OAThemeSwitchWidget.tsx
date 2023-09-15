import { useContext } from 'react';
import { ThemeContext } from '@/components/shared/providers/ThemeProvider';
import OASwitch from '../features/OASwitch';

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

const OAThemeSwitchWidget = () => {
  const themeContext = useContext(ThemeContext);

  const handleSwitchTheme = (e: boolean) => {
    const newTheme = e ? 'dark' : 'light';
    themeContext.onChangeTheme(newTheme);
  };
  return (
    <OASwitch
      variantsBg={variantsBg}
      variantsToggle={variantsToggle}
      state={themeContext.theme === 'dark'}
      onChange={handleSwitchTheme}
      style={{ minWidth: '40px', maxWidth: '60px' }}
    />
  );
};

export default OAThemeSwitchWidget;
