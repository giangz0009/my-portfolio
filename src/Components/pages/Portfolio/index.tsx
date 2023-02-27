import { Autocomplete, Box, IconButton, TextField } from "@mui/material";
import myPortfolio, { Project, PUB_TECHS } from "Assets/Data/myPortfolio";
import ThemeText from "Components/Atoms/ThemeText";
import MainLayout from "Components/Layouts/MainLayout";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";

import styles from "./styles.module.scss";

interface FilterSearchProps {
  value: string[];
  onChange: (newValue: string[]) => void;
}

const FilterSearch: React.FC<FilterSearchProps> = ({ value, onChange }) => {
  return (
    <Box className="py-4">
      <Autocomplete
        value={value}
        onChange={(event: any, newValue: string[]) => {
          onChange(newValue);
        }}
        multiple
        filterSelectedOptions
        limitTags={5}
        id="multiple-limit-tags"
        options={Object.keys(PUB_TECHS)}
        getOptionLabel={(option) => PUB_TECHS[option]}
        defaultValue={[]}
        renderInput={(params) => (
          <TextField {...params} placeholder="Filter Search" />
        )}
        sx={{
          "& fieldset": {
            borderColor: "var(--theme-status-text-main) !important",
          },
          "& .MuiButtonBase-root.MuiChip-root": {
            fontWeight: 600,
            color: "var(--theme-status-text-bolder)",
            backgroundColor: "transparent",
            border: "1px solid var(--theme-status-text-bolder)",
            "& svg": {
              color: "var(--theme-status-text-bolder)",
            },
          },
          "& .MuiAutocomplete-endAdornment": {
            "& .MuiButtonBase-root": {
              color: "var(--theme-status-text-bolder)",
            },
          },
          "& .MuiInputBase-input": {
            color: "var(--theme-status-text-bolder)",
          },
        }}
      />
    </Box>
  );
};

interface ProjectItemProps {
  data: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ data }) => {
  const { img, mainTechs, name, linkDemo } = data;

  return (
    <Grid xs={12} md={6} lg={4}>
      <Box
        className={`${styles.projectItem} w-full overflow-hidden rounded-2xl`}
      >
        <Box className={`${styles.projectItemImg} w-full overflow-hidden`}>
          <img
            className="block w-[100%] object-cover object-center"
            src={img ?? ""}
            alt="My Project"
          />
          {linkDemo && (
            <Box className={`${styles.projectItemLink}`}>
              <IconButton href={linkDemo} target={"_blank"}>
                <AttachFileIcon />
              </IconButton>
            </Box>
          )}
        </Box>
        <Box
          className={`${styles.projectItemContent} bg-themeStatus-lighter py-2 pb-4`}
        >
          <h3 className="text-center text-theme-base text-[1.1rem] font-medium py-2">
            {name}
          </h3>
          <p className="text-themeStatus-base text-center text-[0.9rem]">
            {mainTechs.map((mainTech) => PUB_TECHS[mainTech]).join(" + ")}
          </p>
        </Box>
      </Box>
    </Grid>
  );
};

const Portfolio = () => {
  const [searchValue, setSearchValue] = React.useState<string[]>([]);

  const handleChangeSearchValue = React.useCallback(
    (newValue: string[]) => {
      setSearchValue(newValue);
    },
    [searchValue]
  );

  const handleFilter = (
    parent: (keyof typeof PUB_TECHS)[],
    children: any[]
  ) => {
    return children.every((child) => parent.includes(child));
  };

  const _renderProjects = React.useMemo(() => {
    const filterProjects = myPortfolio.projects.filter((project) =>
      handleFilter(project.techs, searchValue)
    );

    return filterProjects.map((project, index) => (
      <ProjectItem data={project} key={index} />
    ));
  }, [searchValue]);

  return (
    <MainLayout.ContentWrapper textOpacity="PORTFOLIO">
      <Box className="py-4 flex flex-col overflow-hidden h-full">
        <Box className="flex items-center">
          <h3 className="text-themeStatus-bolder text-[1.6rem]">
            <ThemeText text="My " />
            Portfolio
          </h3>
          <Box className="flex-1 pl-10">
            <FilterSearch
              value={searchValue}
              onChange={handleChangeSearchValue}
            />
          </Box>
        </Box>
        <Box className="mt-4 flex-1 overflow-scroll">
          <Grid container spacing={4}>
            {_renderProjects}
          </Grid>
        </Box>
      </Box>
    </MainLayout.ContentWrapper>
  );
};

export default Portfolio;
