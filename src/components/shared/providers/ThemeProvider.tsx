import {
  FC,
  ReactNode,
  createContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

interface ThemeProviderProps {
  onChange?: (theme: string) => void;
  children: ReactNode;
}

export const ThemeContext = createContext<{
  theme: string;
  onChangeTheme: any;
}>({
  theme: 'dark',
  onChangeTheme: () => {},
});

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const [theme, setTheme] = useState<string>('dark');

  useEffect(() => {
    setTheme(localStorage.getItem('theme') || 'dark');
  }, []);

  const onChangeTheme = useMemo(
    () => (newTheme: string) => {
      setTheme(newTheme);
      props.onChange?.(newTheme);
      localStorage.setItem('theme', newTheme);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
