import React from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { SVGIconProps } from "Components/Atoms/Icon";

const Resume: React.FC<SVGIconProps> = ({ size, color }) => {
  return (
    <SettingsOutlinedIcon
      sx={{
        width: size + "px",
        height: size + "px",
        fill: color,
      }}
    />
  );
};

export default Resume;
