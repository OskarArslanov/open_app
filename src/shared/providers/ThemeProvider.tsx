import {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

export const ThemeContext = createContext<{
  theme: string;
  onChangeTheme: any;
}>({
  theme: 'light',
  onChangeTheme: () => {},
});

const ThemeProvider: FC<PropsWithChildren> = (props) => {
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    setTheme(localStorage.getItem('theme') || 'light');
  }, []);

  const onChangeTheme = useMemo(
    () => (newTheme: string) => {
      setTheme(newTheme);
    },
    [],
  );

  const providerData = useMemo(
    () => ({
      theme,
      onChangeTheme,
    }),
    [onChangeTheme, theme],
  );

  return (
    <ThemeContext.Provider value={providerData}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
