import { Box } from "@mui/material";
import useWindowSize from "hooks/useWindowsize";
import React, { useMemo } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import MainLayout from "../MainLayout";
import MainSideBar from "../Moleclues/MainSideBar";

const MainWrapper = () => {
  const navigate = useNavigate();
  const getWindowSize = useWindowSize();

  const isMobileScreen = useMemo(
    () => getWindowSize.width <= 768,
    [getWindowSize]
  );
  const [routeHref, setRouteHref] = React.useState<string>("");
  const [isOpenMenuMobile, setIsOpenMenuMobile] =
    React.useState<boolean>(false);

  const handleOpenMenuMobile = React.useCallback(
    (isOpen: boolean) => {
      setIsOpenMenuMobile(isOpen);
    },
    [isOpenMenuMobile]
  );

  let timeOut1;
  let timeOut2;

  const handleTimeOut = (href: string) => {
    clearTimeout(timeOut1);
    clearTimeout(timeOut2);

    timeOut1 = setTimeout(() => {
      navigate(href);
      if (isMobileScreen) setIsOpenMenuMobile(false);
    }, 1000);

    timeOut2 = setTimeout(() => {
      setRouteHref("");
    }, 2000);
  };

  const handleChangeRoute =
    (href: string) => (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();

      setRouteHref(href);

      handleTimeOut(href);
    };

  // React.useEffect(() => {
  //   if (!Boolean(routeHref)) return;

  //   handleTimeOut();
  // }, [routeHref]);

  const { Wrapper, SideBar, Content } = MainLayout;

  return (
    <Box className="layout-MainWrapper">
      <Wrapper isMobileScreen={isMobileScreen}>
        <SideBar>
          <MainSideBar
            onChangeNav={handleChangeRoute}
            isMobileScreen={isMobileScreen}
            onOpenMobileMenu={handleOpenMenuMobile}
            isOpenMobileMenu={isOpenMenuMobile}
          />
        </SideBar>
        <Content isChangingPage={Boolean(routeHref)}>
          <Outlet />
        </Content>
      </Wrapper>
    </Box>
  );
};

export default MainWrapper;
