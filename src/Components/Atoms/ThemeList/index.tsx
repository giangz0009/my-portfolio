import useLocalStorage from "hooks/useLocalStorage";
import React, { useMemo, useState, useEffect } from "react";
import styles from "./styles.module.scss";

const COLOR_LIST = {
  red: "#f44336",
  yellow: "#ff9800",
  green: "#618833",
};

const THEME_LIST: string[] = ["red", "yellow", "green"];

const ThemeList = () => {
  const [themeTypeLocal, setThemeTypeLocal] = useLocalStorage(
    "themeType",
    "red"
  );
  const [theme, setTheme] = useState<string>(() => {
    document.body.setAttribute("data-theme-type", themeTypeLocal);

    return themeTypeLocal;
  });

  useEffect(() => {
    setThemeTypeLocal(theme);
    document.body.setAttribute("data-theme-type", theme);
  }, [theme]);

  const handleChangeTheme = (theme: string) => () => {
    setTheme(theme);
  };

  const _renderThemeList = useMemo(() => {
    return THEME_LIST.map((themeCurr) => (
      <li
        className={`${styles.themeItem} ${
          themeCurr === theme ? styles.active : ""
        }`}
        key={themeCurr}
        style={
          { "--theme-color": COLOR_LIST[themeCurr] } as React.CSSProperties
        }
        onClick={handleChangeTheme(themeCurr)}
      >
        <span>theme</span>
      </li>
    ));
  }, [theme]);

  return <ul className="flex gap-4 md:flex-col">{_renderThemeList}</ul>;
};

export default ThemeList;
