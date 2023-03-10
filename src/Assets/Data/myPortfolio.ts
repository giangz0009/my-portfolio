import { TSVGIcon } from "Components/Atoms/Icon";
import movieApp from "Assets/images/projects/movie-app.png";
import fiverrApp from "Assets/images/projects/fiverr-app.png";
import corpApp from "Assets/images/projects/corp-vision.png";
import portfolio from "Assets/images/projects/portfolio.png";

//  add your skills here
export const PUB_TECHS = {
  html: "HTML",
  css: "CSS",
  bootstrap: "Bootstrap",
  responsive: "Responsive",
  scss: "SCSS",
  tailwind: "Tailwind",
  js: "Javascript",
  jquery: "Jquery",
  ts: "Typescript",
  reactJs: "ReactJS",
  redux: "Redux",
  materialUI: "Material UI",
};

const mySkills = Object.values(PUB_TECHS);

export const SOCIALS_TYPE_LINK = {
  facebook: "https://www.facebook.com/giang.do.77398143",
};

export type Socials = {
  [key in keyof typeof SOCIALS_TYPE_LINK]: {
    type: keyof typeof SOCIALS_TYPE_LINK;
    src: string;
  };
};

export interface Contacts {
  email: string;
  phone: string;
  address: string;
  socials: Socials;
}

export interface Project {
  name: string;
  date: string;
  linkDemo?: string;
  linkSrc?: string;
  img?: string;
  techs: (keyof typeof PUB_TECHS)[];
  mainTechs: (keyof typeof PUB_TECHS)[];
}

export interface Hobby {
  type: TSVGIcon;
  label: string;
  desc: string;
}

export interface WorkExperence {
  position: string;
  date: string;
  companyName: string;
  desc: string;
}

export interface Education {
  major: string;
  date: string;
  academyName: string;
  desc: string;
}

interface MyPortfolioType {
  fullName: string;
  name: string;
  techPos: string[];
  introduce: string;
  experience: string;
  techs: string[];
  hobbies: Hobby[];
  workExperence: WorkExperence[];
  education: Education[];
  personalSkills: string[];
  professionalSkills: string[];
  projects: Project[];
  contacts: Contacts;
  cv: string;
}

const myPortfolio: MyPortfolioType = {
  fullName: "Đỗ Trường Giang",
  name: "Giang Đỗ",
  techPos: ["Frontend Developer"],
  introduce:
    "I am passionated about learning new technologies and always keep concentrating on improving myself skills. Being patient and responsible for working help me quickly complete all of my assigned tasks. Finally, I really hope that I can contribute to the development of your company.",
  experience: "under 1 year experience",
  techs: [...mySkills, "..."],
  hobbies: [
    {
      type: "travel",
      label: "Travelling",
      desc: "Travel to new lands, see new people and know about new cultures",
    },
    {
      type: "music",
      label: "Listening to music",
      desc: "Music is the most important thing make me relax when using 100% energy for coding",
    },
    {
      type: "eat",
      label: "Eating",
      desc: `Just like our grandparents said: "It’s no use preaching to a hungry man"`,
    },
    {
      type: "read",
      label: "Reading books",
      desc: "The more books I read , the more I learn about life and everything.",
    },
  ],
  workExperence: [
    {
      companyName: "Be Fitech",
      date: "December 2022 - February 2023",
      desc: "Building and developing a web application that allows to support the management of internal emails easily and conveniently",
      position: "Frontend Developer",
    },
    {
      companyName: "Cybersoft Academy",
      date: "April 2022 - November 2022",
      desc: "Completed 3 capstone projects and 1 final project",
      position: "Frontend Developer",
    },
  ],
  education: [
    {
      academyName: "CYBERSOFT ACADEMY",
      date: "April 2022 - Oct 2022",
      major: "FRONT-END WEB DEVELOPER",
      desc: "Learn about Front end techniques : HTML, CSS , Javascript, ReactJs, Redux....",
    },
    {
      academyName: "INFORMATION CENTER OF UNIVERSITY OF NATURAL SCIENCES",
      major: " WEBSITE PROGRAMMING TECHNICIAN",
      date: "May 2021 - July 2021",
      desc: "KNOWLEDGE BASE HTML, CSS, JS, OOP, Data Structure and Algorithms",
    },
    {
      academyName: "BEN TRE COLLEGE",
      date: "Oct 2018 - May 2021",
      major: "INFORMATION TECHNOLOGY",
      desc: "SOFT SKILLS Teamwork, self study",
    },
  ],
  personalSkills: ["Communication", "Team Word", "Mindset", "Research"],
  professionalSkills: [
    "HTML & CSS & JS",
    "SASS & SCSS",
    "Bootstrap",
    "Tailwind",
    "Typescript",
    "Jquery",
    "ReactJS",
    "Redux",
  ],
  projects: [
    {
      name: "My Portfolio",
      techs: [
        "html",
        "css",
        "scss",
        "materialUI",
        "tailwind",
        "responsive",
        "js",
        "ts",
        "reactJs",
      ],
      mainTechs: ["tailwind", "reactJs", "redux", "ts"],
      date: "15/02/2023 - 27/02/2023",
      img: portfolio,
      linkDemo: "https://giangdev.vercel.app/#/home",
    },
    {
      name: "Fiverr App",
      techs: [
        "html",
        "css",
        "scss",
        "materialUI",
        "responsive",
        "js",
        "reactJs",
        "redux",
      ],
      mainTechs: ["reactJs"],
      date: "26/09/2022 - 23/10/2022",
      linkDemo: "https://fe72-fiver-user.vercel.app/",
      img: fiverrApp,
    },
    {
      name: "Movie Booking",
      techs: [
        "html",
        "css",
        "scss",
        "materialUI",
        "responsive",
        "js",
        "reactJs",
        "redux",
      ],
      mainTechs: ["reactJs"],
      date: "28/08/2022 - 26/09/2022",
      linkDemo: "https://fe-72-cap-stone-movie-app.vercel.app/",
      img: movieApp,
    },
    {
      name: "Corp Vision",
      techs: ["html", "css", "scss", "bootstrap", "responsive", "js"],
      mainTechs: ["html", "css"],
      date: "15/5/2022 - 22/5/2022",
      linkDemo: "https://fe72capstone1.vercel.app/",
      img: corpApp,
    },
  ],
  contacts: {
    address: "38 C1, 13 Ward, Tân Bình District",
    email: "giangdev.cv@gmail.com",
    phone: "036 509 6648",
    socials: {
      facebook: {
        src: SOCIALS_TYPE_LINK.facebook,
        type: "facebook",
      },
    },
  },
  cv: "https://drive.google.com/file/d/1A6bp2gm-UcEWkI2btPUmWJ9HvgRJ_wJ9/view?usp=share_link",
};

export default myPortfolio;
