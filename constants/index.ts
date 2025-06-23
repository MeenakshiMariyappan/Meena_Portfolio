import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SOCIALS = [
  {
    name: "Github",
    icon: RxGithubLogo,
    link: "https://github.com/MeenakshiMariyappan",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/meenakshi-m-6058391b2/",
  },
  // {
  //   name: "Twitter",
  //   icon: RxTwitterLogo,
  //   link: "https://twitter.com",
  // },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "JIRA",
    image: "jira.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "GIT",
    image: "github.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Putty",
    image: "PuTTY.png",
    width: 70,
    height: 70,
  },
] as const;

export const FULLSTACK_SKILL = [
 /* {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },*/
] as const;

export const PROJECTS = [
  {
    title: "Zentry Clone",
    description:
      'A perfect recreation of the award-winning Zentry website landing page, featuring stunning animations and an immersive user interface. This clone demonstrates advanced frontend capabilities, seamlessly replicating the original site, including dynamic transitions, responsive design, and captivating animations.',
    image: "/projects/Zentry.png",
    link: "https://zentry-umber.vercel.app/",
  },
  {
    title: "StoreIt",
    description:
      'StoreIt is a modern document management system that provides secure storage for various file formats including documents, PDFs, and images. With an intuitive user interface, it offers powerful features like advanced search, smart filtering, and customizable sorting. Enhanced with robust authentication, it ensures your files remain organized and protected',
    image: "/projects/StoreIt.png",
    link: "https://store-it-weld-eight.vercel.app/",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Work",
    link: "#work",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};

export const EXPERIENCE = [
  {
    title: "Associate Software Engineer",
    company_name: "Tekion",
    icon: "https://media.licdn.com/dms/image/C560BAQGB0W6_ixPclA/company-logo_200_200/0/1630590775082/tekion_logo?e=2147483647&v=beta&t=DBbVnH0gdNkbwbVRXuLh8drDiadLcYlP1QS6vq457Qk",
    iconBg: "#383E56",
    date: "Sep 2022 - Present",
    points: [
      "Independently developed and launched two critical internal applications (Resource Management & Timesheet) using React, Redux, and Go, reducing operational costs and improving workflow efficiency.",
      "Architected and implemented a comprehensive Resource Management system to track and allocate 1000+ employees across multiple projects, optimizing resource utilization.",
      "Built a custom Timesheet application (Lattice clone) with features for weekly time entry, manager approvals, and scheduled reviews, enhancing organizational productivity.",
      "Contributed to backend development using Go, implementing RESTful APIs and maintaining system architecture while ensuring scalability and performance.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "Tekion",
    icon: "https://media.licdn.com/dms/image/C560BAQGB0W6_ixPclA/company-logo_200_200/0/1630590775082/tekion_logo?e=2147483647&v=beta&t=DBbVnH0gdNkbwbVRXuLh8drDiadLcYlP1QS6vq457Qk",
    iconBg: "#383E56",
    date: "Sep 2022 - Present",
    points: [
      "Independently developed and launched two critical internal applications (Resource Management & Timesheet) using React, Redux, and Go, reducing operational costs and improving workflow efficiency.",
      "Architected and implemented a comprehensive Resource Management system to track and allocate 1000+ employees across multiple projects, optimizing resource utilization.",
      "Built a custom Timesheet application (Lattice clone) with features for weekly time entry, manager approvals, and scheduled reviews, enhancing organizational productivity.",
      "Contributed to backend development using Go, implementing RESTful APIs and maintaining system architecture while ensuring scalability and performance.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Tekion",
    icon: "https://media.licdn.com/dms/image/C560BAQGB0W6_ixPclA/company-logo_200_200/0/1630590775082/tekion_logo?e=2147483647&v=beta&t=DBbVnH0gdNkbwbVRXuLh8drDiadLcYlP1QS6vq457Qk",
    iconBg: "#383E56",
    date: "Jan 2022 - Aug 2022",
    points: [
      "Contributed to Tekion Automation Platform (TAP), an internal suite of applications designed to replace third-party solutions like JIRA and Salesforce, significantly reducing subscription costs.",
      "Developed key features for TAP Task Management (JIRA clone) using React and Redux, focusing on user interface and experience improvements.",
      "Implemented responsive designs and interactive components following modern frontend development practices and company design guidelines.",
      "Collaborated with the development team to identify and resolve bugs, improving application stability and user satisfaction.",
    ],
  },
];
