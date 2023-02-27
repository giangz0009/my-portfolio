import React, { useMemo } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import ReactTypingEffect from "react-typing-effect";
import img from "Assets/images/portfolio-img/avatar-without-background.png";
import myPortfolio from "Assets/Data/myPortfolio";
import MainLayout from "Components/Layouts/MainLayout";
import { Box, Button } from "@mui/material";

import cv from "Assets/images/cv/cv.pdf";
import { Animated } from "react-animated-css";
import ThemeText from "Components/Atoms/ThemeText";
import MainButton from "Components/Atoms/MainButton";

const Home = () => {
  const introduceTxt = useMemo(() => {
    return (
      <>
        <p className="text-[2.4rem] font-semibold text-themeStatus-bolder">
          <span>Hello, my name is </span>
          <ThemeText text={myPortfolio.name} />
        </p>
        <p className="text-[1.8rem] font-bold text-themeStatus-bolder">
          <span>I'm a </span>
          <ReactTypingEffect
            className="font-bold text-theme-base"
            text={myPortfolio.techPos}
            typingDelay={1000}
            eraseDelay={2000}
          />
        </p>
        <Box className="animate__animated animate__fadeInUpBig">
          <p className="text-[1.3rem] opacity-80 italic font-medium text-themeStatus-bolder mt-4">
            {myPortfolio.introduce}
          </p>
        </Box>
      </>
    );
  }, [myPortfolio]);

  return (
    <MainLayout.ContentWrapper textOpacity="Giang Do">
      <div className="h-full">
        <div className="flex items-center h-full px-8">
          <Grid container className="w-full h-full">
            <Grid xs={12} md={8}>
              <div className="flex flex-col justify-center h-full overflow-hidden">
                {introduceTxt}
                <Box className="flex mt-6">
                  <MainButton href={cv}>View My CV</MainButton>
                </Box>
              </div>
            </Grid>
            <Grid xs={12} md={4}>
              <div className="h-full">
                <img
                  src={img}
                  alt="My avatar"
                  className="animate__animated animate__bounceInUp w-full h-full object-cover object-center"
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </MainLayout.ContentWrapper>
  );
};

export default Home;
