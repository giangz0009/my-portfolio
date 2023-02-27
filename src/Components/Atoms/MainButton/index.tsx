import Button from "@mui/material/Button";
import { SxProps, Theme } from "@mui/material/styles";
import React from "react";

interface MainButtonProps extends React.PropsWithChildren {
  href: string;
  className?: string;
  sx?: SxProps<Theme>;
  isPrimary?: boolean;
}

const MainButton: React.FC<MainButtonProps> = ({
  children,
  href,
  className,
  sx,
  isPrimary = true,
}) => {
  return (
    <Button
      variant="outlined"
      href={href}
      target="_blank"
      className={className}
      sx={{
        padding: "8px 32px",
        borderColor: isPrimary
          ? "var(--theme-bg-main)"
          : "var(--theme-status-text-bolder)",
        color: isPrimary
          ? "var(--theme-bg-main)"
          : "var(--theme-status-text-bolder)",
        fontWeight: 700,
        "&:hover": {
          borderColor: isPrimary
            ? "var(--theme-bg-main)"
            : "var(--theme-status-text-bolder)",
          backgroundColor: "rgba(var(--theme-status-text-bolder-rgb), 0.1)",
        },
        ...sx,
      }}
    >
      {children}
    </Button>
  );
};

export default MainButton;
