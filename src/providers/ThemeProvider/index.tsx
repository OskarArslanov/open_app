import {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";

const ThemeContext = createContext<{ theme: string; onChangeTheme: any }>({
  theme: "light",
  onChangeTheme: (theme: string) => {},
});

const ThemeProvider: FC<PropsWithChildren> = (props) => {
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "light");
  }, []);

  const onChangeTheme = (theme: string) => {
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, onChangeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
