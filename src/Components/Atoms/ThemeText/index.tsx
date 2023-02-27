import React from "react";

interface ThemeTextProps {
  className?: string;
  text: string;
}

const ThemeText: React.FC<ThemeTextProps> = ({ text, className }) => {
  return (
    <span className={`font-bold text-theme-base ${className ? className : ""}`}>
      {text}
    </span>
  );
};

export default ThemeText;
