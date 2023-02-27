import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";

import styles from "./styles.module.scss";

const LoadingLayer = () => {
  return (
    <Grid container className="absolute top-0 left-0 w-full h-full z-[15]">
      <Grid xs={6} lg={3}>
        <Box className={styles.loadingPatch}></Box>
      </Grid>
      <Grid xs={6} lg={3}>
        <Box className={styles.loadingPatch}></Box>
      </Grid>
      <Grid lg={3}>
        <Box className={styles.loadingPatch}></Box>
      </Grid>
      <Grid lg={3}>
        <Box className={styles.loadingPatch}></Box>
      </Grid>
    </Grid>
  );
};

export default LoadingLayer;
