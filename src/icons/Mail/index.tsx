import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { SVGIconProps } from "Components/Atoms/Icon";

const Mail: React.FC<SVGIconProps> = ({ size, color }) => {
  return (
    <EmailOutlinedIcon
      sx={{
        width: size + "px",
        height: size + "px",
        fill: color,
      }}
    />
  );
};

export default Mail;
