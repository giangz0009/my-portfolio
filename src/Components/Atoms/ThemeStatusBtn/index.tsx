import React, { useEffect, useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import IconButton from "@mui/material/IconButton";
import useLocalStorage from "hooks/useLocalStorage";

const ThemeStatusBtn = () => {
  const [isDarkThemeLocal, setIsDarkThemeLocal] = useLocalStorage(
    "isDarkTheme",
    true
  );

  const [isDark, setIsDark] = useState<boolean>(() => {
    document.body.classList.toggle("light", !isDarkThemeLocal);
    return isDarkThemeLocal;
  });

  useEffect(() => {
    setIsDarkThemeLocal(isDark);
    document.body.classList.toggle("light", !isDark);
  }, [isDark]);

  const handleChangeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="flex items-center py-4 ml-4 md:ml-0">
      <IconButton
        onClick={handleChangeTheme}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          "&:hover": {
            svg: {
              transform: "scale(1.2)",
            },
          },
        }}
      >
        {isDark ? (
          <DarkModeIcon
            sx={{
              fill: "var(--theme-status-text-main)",
              transition: "0.3s",
            }}
            className="fill-themeStatus-base"
          />
        ) : (
          <LightModeIcon
            sx={{
              fill: "var(--theme-status-text-main)",
              transition: "0.3s",
            }}
          />
        )}
      </IconButton>
    </div>
  );
};

export default ThemeStatusBtn;
