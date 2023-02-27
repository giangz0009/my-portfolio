import FlatwareIcon from "@mui/icons-material/Flatware";
import { SVGIconProps } from "Components/Atoms/Icon";
import React from "react";

const Eat: React.FC<SVGIconProps> = ({ size, color }) => {
  return (
    <FlatwareIcon
      sx={{
        width: size + "px",
        height: size + "px",
        fill: color,
      }}
    />
  );
};

export default Eat;
