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

  const handleChangeRoute = React.useCallback(
    (href: string) => (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      setRouteHref(href);
    },
    [routeHref]
  );

  React.useEffect(() => {
    if (!Boolean(routeHref)) return;

    setTimeout(() => {
      navigate(routeHref);
      if (isMobileScreen) setIsOpenMenuMobile(false);
    }, 1000);

    setTimeout(() => {
      setRouteHref("");
    }, 2000);
  }, [routeHref]);

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
