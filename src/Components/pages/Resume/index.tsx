import MainLayout from "Components/Layouts/MainLayout";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Education, WorkExperence } from "Assets/Data/myPortfolio";
import ThemeText from "Components/Atoms/ThemeText";
import Box from "@mui/material/Box";
import myPortfolio from "Assets/Data/myPortfolio";

import styles from "./styles.module.scss";

interface SkillsBlockProps {
  boldTitle: string;
  title: string;
  data: string[];
}

const SkillsBlock: React.FC<SkillsBlockProps> = ({
  boldTitle,
  title,
  data,
}) => {
  const _renderSkills = React.useMemo(() => {
    return (
      <ul className="list-disc">
        {data.map((skill) => (
          <li
            className="animate__animated animate__fadeInRight text-themeStatus-bolder block py-2"
            key={skill}
          >
            {skill}
          </li>
        ))}
      </ul>
    );
  }, [data]);

  return (
    <Box>
      <h3 className="text-themeStatus-bolder font-medium text-[1.4rem]">
        <ThemeText text={boldTitle + " "} />
        {title}
      </h3>
      <Box
        className="bg-themeStatus-lighter p-4 px-6 mt-4 rounded-3xl"
        sx={{
          boxShadow: "0 0 20px 2px rgb(0 0 0 / 0.1)",
        }}
      >
        {_renderSkills}
      </Box>
    </Box>
  );
};

interface ResumeItemBlockProps {
  date: string;
  title: string;
  subDesc: string;
  desc: string;
}

const ResumeItemBlock: React.FC<ResumeItemBlockProps> = ({
  date,
  title,
  desc,
  subDesc,
}) => {
  return (
    <Box className={styles.resumeItem}>
      <Box
        className={`${styles.resumeItemWrap} animate__animated animate__fadeInRight`}
      >
        <h3 className="text-themeStatus-bolder font-semibold -translate-y-1/2 text-[1.1rem]">
          {date}
        </h3>
        <p className="uppercase text-themeStatus-base font-semibold text-[0.9rem] my-2">
          {title}
        </p>
        <p className="uppercase text-themeStatus-bolder font-semibold my-2">
          {subDesc}
        </p>
        <p className="text-themeStatus-base text-[0.9rem]">{desc}</p>
      </Box>
    </Box>
  );
};

interface ResumeBlockInterface {
  boldTitle: string;
  title: string;
  data: WorkExperence[] | Education[];
  type: "experience" | "education";
}

const ResumeBlock: React.FC<ResumeBlockInterface> = ({
  title,
  boldTitle,
  data,
  type,
}) => {
  const _renderResumeExperience = React.useCallback(
    (data: WorkExperence[]) => {
      return data.map((experience) => {
        return (
          <ResumeItemBlock
            date={experience.date}
            title={experience.position}
            subDesc={experience.companyName}
            desc={experience.desc}
            key={experience.date}
          />
        );
      });
    },
    [data]
  );

  const _renderResumeEducation = React.useCallback(
    (data: Education[]) => {
      return data.map((education) => {
        return (
          <ResumeItemBlock
            date={education.date}
            title={education.major}
            subDesc={education.academyName}
            desc={education.desc}
            key={education.date}
          />
        );
      });
    },
    [data]
  );

  const _renderResumeBlock = React.useMemo(() => {
    switch (type) {
      case "education":
        return _renderResumeEducation(data as Education[]);

      default:
        return _renderResumeExperience(data as WorkExperence[]);
    }
  }, [data]);

  return (
    <Box>
      <h3 className="text-themeStatus-bolder font-medium text-[1.4rem]">
        <ThemeText text={boldTitle + " "} />
        {title}
      </h3>
      <Box
        className="mt-4 p-4 py-8 rounded-3xl bg-themeStatus-lighter"
        sx={{
          boxShadow: "0 0 20px 2px rgb(0 0 0 / 0.1)",
        }}
      >
        {_renderResumeBlock}
      </Box>
    </Box>
  );
};

const Resume = () => {
  return (
    <MainLayout.ContentWrapper textOpacity="Resume">
      <Box className="pb-8">
        <Grid container spacing={{ xs: 2, md: 4 }}>
          <Grid xs={12} md={6}>
            <ResumeBlock
              boldTitle="My"
              title="Experience"
              data={myPortfolio.workExperence}
              type="experience"
            />
          </Grid>
          <Grid xs={12} md={6}>
            <ResumeBlock
              boldTitle="My"
              title="Education"
              data={myPortfolio.education}
              type="education"
            />
          </Grid>
          <Grid xs={12} md={6}>
            <SkillsBlock
              boldTitle="Personal"
              title="Skills"
              data={myPortfolio.personalSkills}
            />
          </Grid>
          <Grid xs={12} md={6}>
            <SkillsBlock
              boldTitle="Professional"
              title="Skills"
              data={myPortfolio.professionalSkills}
            />
          </Grid>
        </Grid>
      </Box>
    </MainLayout.ContentWrapper>
  );
};

export default Resume;
