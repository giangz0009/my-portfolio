import React from "react";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { SVGIconProps } from "Components/Atoms/Icon";

const Home: React.FC<SVGIconProps> = ({ size, color }) => {
  return (
    <HomeOutlinedIcon
      sx={{
        width: size + "px",
        height: size + "px",
        fill: color,
      }}
    />
  );
};

export default Home;
