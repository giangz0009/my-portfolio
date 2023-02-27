import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import myPortfolio, { Hobby } from "Assets/Data/myPortfolio";

import DownloadIcon from "@mui/icons-material/Download";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

import MainLayout from "Components/Layouts/MainLayout";
import React from "react";

import cv from "Assets/images/cv/cv.pdf";
import ThemeText from "Components/Atoms/ThemeText";
import Icon from "Components/Atoms/Icon";
import MainButton from "Components/Atoms/MainButton";
import CircleButton from "Components/Atoms/CircleButton";

interface HobbyPros {
  data: Hobby;
}

const HobbyBlock: React.FC<HobbyPros> = ({ data }) => {
  const { desc, label, type } = data;

  return (
    <Grid xs={6}>
      <Box
        className="p-6 rounded-xl bg-themeStatus-lighter h-full transition-all hover:-translate-y-1"
        sx={{
          boxShadow: "0 0 20px 2px rgb(0 0 0 / 0.1)",
        }}
      >
        <h3>
          <Icon color="var(--theme-bg-main)" size={30} icons={type} />
        </h3>
        <p className="text-themeStatus-bolder py-4 text-[1.2rem] font-medium">
          {label}
        </p>
        <p className="text-themeStatus-base text-[0.9rem]">{desc}</p>
      </Box>
    </Grid>
  );
};

const About = () => {
  const _renderHobbies = React.useMemo(() => {
    const { hobbies } = myPortfolio;

    return (
      <Grid container spacing={{ xs: 2, md: 4 }}>
        {hobbies.map((hobby, index) => (
          <HobbyBlock data={hobby} key={index} />
        ))}
      </Grid>
    );
  }, [myPortfolio]);

  return (
    <MainLayout.ContentWrapper textOpacity="About Me">
      <Box>
        <Grid container>
          <Grid xs={12}>
            <Box className="md:mt-10 pt-6 font-normal">
              <p>
                <ThemeText
                  text={`Hello, my name is ${myPortfolio.fullName}`}
                  className="text-[2rem] tracking-wider font-medium"
                />
              </p>
              <p className="animate__animated animate__flipInX text-[1.1rem] text-themeStatus-bolder leading-7 mt-4 pr-4 max-w-[900px]">
                <span>
                  I'm a Frontend Developer. I have {myPortfolio.experience} in
                  website building and maintenance. Also I am good at
                </span>
                <ThemeText
                  text={` ${myPortfolio.techs.join(", ")}`}
                  className="font-normal"
                />
              </p>
              <Box className="flex gap-4 mt-8">
                <MainButton href={cv} isPrimary={false}>
                  <DownloadIcon />
                  <span className="pl-2">Download My CV</span>
                </MainButton>
                <CircleButton
                  isPrimary={false}
                  href="https://www.facebook.com/giang.do.77398143"
                >
                  <FacebookIcon />
                </CircleButton>
                <CircleButton
                  isPrimary={false}
                  href="mailto:giangdev.cv@gmail.com"
                >
                  <GoogleIcon />
                </CircleButton>
              </Box>
            </Box>
          </Grid>
          <Grid xs={12}>
            <Box className="py-10 md:py-20">
              <h3 className="text-themeStatus-bolder text-2xl">
                <ThemeText text="My " />
                <span className="font-semibold">Hobbies</span>
              </h3>
              <Box className="mt-6 md:pr-8">{_renderHobbies}</Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </MainLayout.ContentWrapper>
  );
};

export default About;
