import React, { useEffect, useMemo, useState } from "react";
import { sidebarRoute } from "Components/Layouts/MainRouter";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";
import Icon from "Components/Atoms/Icon";
import ThemeList from "Components/Atoms/ThemeList";
import ThemeStatusBtn from "Components/Atoms/ThemeStatusBtn";
import MenuIcon from "@mui/icons-material/Menu";

import Box from "@mui/material/Box";

import logo from "Assets/images/logo.png";
import { Button, Drawer } from "@mui/material";

interface sideBarIconsListType {
  [key: string]: {
    icon: React.ReactElement;
    label: string;
  };
}

const sideBarIconsList = {
  "/home": { icon: <Icon icons="home" />, label: "Home" },
  "/about": { icon: <Icon icons="about" />, label: "About" },
  "/resume": { icon: <Icon icons="resume" />, label: "Resume" },
  "/portfolio": { icon: <Icon icons="portfolio" />, label: "Portfolio" },
  "/contact": { icon: <Icon icons="contact" />, label: "Contact" },
};

interface MainSideBarProps {
  isMobileScreen?: boolean;
  isOpenMobileMenu?: boolean;
  onOpenMobileMenu: (isOpen: boolean) => void;
  onChangeNav: (
    href: string
  ) => (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const MainSideBar: React.FC<MainSideBarProps> = ({
  isMobileScreen = false,
  isOpenMobileMenu = false,
  onChangeNav,
  onOpenMobileMenu,
}) => {
  const [activePath, setActivePath] = useState<string>("/home");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const _renderIndicator = useMemo(() => {
    return (
      <div
        className={`${styles.indicator}`}
        style={
          {
            "--currentIndex": currentIndex,
          } as React.CSSProperties
        }
      >
        <span>{sideBarIconsList[activePath].label}</span>
        <span className="pl-4">{sideBarIconsList[activePath].icon}</span>
      </div>
    );
  }, [currentIndex]);

  const _renderSidebarMenu = useMemo(() => {
    return (
      <ul className={`${styles.sidebarMenu}`}>
        {sidebarRoute.map((sidebar, index) => {
          const path = sidebar.path ?? "";
          const currentIcon = sideBarIconsList[sidebar.path ?? ""];
          return (
            <li className={`${styles.sidebarItem}`} key={sidebar.path}>
              <NavLink
                onClick={onChangeNav(path)}
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.sidebarLink} ${styles.active}`
                    : `${styles.sidebarLink}`
                }
              >
                {({ isActive }) => {
                  if (isActive) {
                    setActivePath(sidebar.path ?? "");
                    setCurrentIndex(index);
                  }

                  return currentIcon.icon;
                }}
              </NavLink>
            </li>
          );
        })}
        {_renderIndicator}
      </ul>
    );
  }, [currentIndex]);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      onOpenMobileMenu(open);
    };

  const _renderSidebarMenuMobile = React.useMemo(() => {
    return (
      <React.Fragment>
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon
            sx={{
              fill: "var(--theme-status-text-bolder)",
            }}
          />
        </Button>
        <Drawer
          anchor={"top"}
          open={isOpenMobileMenu}
          onClose={toggleDrawer(false)}
          sx={{
            "& .MuiPaper-root": {
              backgroundColor: "var(--theme-status-bg-main)",
            },
          }}
        >
          <Box className="relative">
            {_renderSidebarMenu}
            <Box className="p-2 absolute top-0 right-0 w-[60px] h-[60px] bg-[rgba(var(--theme-bg-main-rgb,0.2))]">
              <img
                className="w-full h-full object-contain object-center"
                src={logo}
                alt="My Logo"
              />
            </Box>
          </Box>
        </Drawer>
      </React.Fragment>
    );
  }, [currentIndex, isOpenMobileMenu]);

  return (
    <div className="M-MainSideBar">
      <div className="relative flex md:flex-col h-[50px] md:h-[100vh] md:w-[50px]">
        <div>
          <div className={`${styles.logo} h-full md:h-auto md:mb-2 p-2`}>
            {/* <span className="flex items-center justify-center h-[50px] text-white font-bold">
              G
            </span> */}
            <img
              className="w-[50px] md:w-full h-full object-contain object-center"
              src={logo}
              alt="Logo"
            />
          </div>
          {!isMobileScreen && _renderSidebarMenu}
        </div>
        <div className="flex-1 flex md:flex-col justify-end">
          <ThemeList />
          <ThemeStatusBtn />
        </div>
        <Box className="flex items-center justify-center">
          {isMobileScreen && _renderSidebarMenuMobile}
        </Box>
      </div>
    </div>
  );
};

export default MainSideBar;
