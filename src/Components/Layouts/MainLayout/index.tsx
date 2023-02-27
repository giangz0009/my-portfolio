import { Box } from "@mui/material";
import React, { useMemo } from "react";
import LoadingLayer from "../Moleclues/LoadingLayer";

interface WrapperProps extends React.PropsWithChildren {
  isMobileScreen?: boolean;
}

const Wrapper: React.FC<WrapperProps> = ({
  children,
  isMobileScreen = false,
}) => {
  const basicClass = useMemo<string>(
    () => (isMobileScreen ? "flex-col" : ""),
    [isMobileScreen]
  );

  return (
    <Box className={`flex h-[100vh] overflow-hidden ${basicClass}`}>
      {children}
    </Box>
  );
};

interface SideBarProps extends React.PropsWithChildren {}

const SideBar: React.FC<SideBarProps> = ({ children }) => {
  return <Box className={`bg-themeStatus-base transition-all`}>{children}</Box>;
};

interface ContentProps extends React.PropsWithChildren {
  isChangingPage: boolean;
}

const Content: React.FC<ContentProps> = ({ children, isChangingPage }) => {
  return (
    <Box
      className="flex-1 relative  overflow-hidden"
      sx={{
        background: "var(--theme-status-bg-content)",
      }}
    >
      {isChangingPage && <LoadingLayer />}
      {children}
    </Box>
  );
};

interface ContentWrapperProps extends React.PropsWithChildren {
  textOpacity: string;
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({
  children,
  textOpacity,
}) => {
  return (
    <Box className="h-full w-full relative">
      <Box className="animate__animated animate__fadeInRight absolute top-0 left-0 w-full h-full">
        <p className="text-[6rem] font-extrabold tracking-widest text-right text-themeStatus-opacity opacity-10 pr-10 uppercase py-8">
          {textOpacity}
        </p>
      </Box>
      <Box className="relative z-10 w-full h-full">
        <Box className="px-3 md:pl-[10%] md:pr-8 h-full w-full overflow-scroll pt-10">
          {children}
        </Box>
      </Box>
    </Box>
  );
};

const MainLayout = { Wrapper, SideBar, Content, ContentWrapper };

export default MainLayout;
