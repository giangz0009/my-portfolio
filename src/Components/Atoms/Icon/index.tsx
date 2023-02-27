import { Box } from "@mui/material";
import React, { Suspense } from "react";
import colors from "tailwindcss/colors";

const Travel = React.lazy(() => import("icons/Travel"));
const Music = React.lazy(() => import("icons/Music"));
const Eat = React.lazy(() => import("icons/Eat"));
const Read = React.lazy(() => import("icons/Read"));
const Home = React.lazy(() => import("icons/Home"));
const About = React.lazy(() => import("icons/About"));
const Resume = React.lazy(() => import("icons/Resume"));
const Eye = React.lazy(() => import("icons/Eye"));
const Mail = React.lazy(() => import("icons/Mail"));

export interface SVGIconProps {
  className?: string;
  size?: number;
  color?: string;
}

const ICON = {
  travel: Travel,
  music: Music,
  eat: Eat,
  read: Read,
  home: Home,
  about: About,
  resume: Resume,
  portfolio: Eye,
  contact: Mail,
};

export type TSVGIcon = keyof typeof ICON;

interface IconProps extends SVGIconProps {
  icons: TSVGIcon;
}

const Icon: React.FC<IconProps> = ({
  icons = "home",
  size = 20,
  color = "var(--theme-status-text-main)",
  ...props
}) => {
  const IconComp = ICON[icons];

  return (
    <Suspense fallback={<div>...</div>}>
      <IconComp size={size} color={color} {...props} />
    </Suspense>
  );
};

export default Icon;
