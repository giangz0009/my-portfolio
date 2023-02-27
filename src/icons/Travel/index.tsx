import React from "react";

import CardTravelIcon from "@mui/icons-material/CardTravel";
import { SVGIconProps } from "Components/Atoms/Icon";

const Travel: React.FC<SVGIconProps> = ({ size, color }) => {
  return (
    <CardTravelIcon
      sx={{
        width: size + "px",
        height: size + "px",
        fill: color,
      }}
    />
  );
};

export default Travel;
