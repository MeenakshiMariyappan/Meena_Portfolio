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
    title: "Associate",
    company_name: "Cognizant",
    icon: "/company/cognizant.png",
    iconBg: "#F5F5F5",
    date: "Apr 2025 - Present",
    points: [
     "Took on extended responsibilities post-promotion, including post-patch frontend validations to ensure UI stability after critical infrastructure updates.",
      "Acted as backup team lead, managing sprint planning, blocker resolution, and task coordination during the team lead’s absence.",
      "Mentored new team members in React development, component structure, and clean coding practices, accelerating their onboarding and contribution.",
      "Collaborated closely with backend and DevOps teams, contributing to API integration discussions and exploring cloud/backend technologies to support broader project needs."
    ],
  },
  {
    title: "Programmer Analyst",
    company_name: "Cognizant",
    icon: "/company/cognizant.png",
    iconBg: "#F5F5F5",
    date: "Jul 2022 - Apr 2025",
    points: [
    "Worked on a US-based healthcare client project (Healogics Group), contributing to 6+ frontend applications including Encode, Retrieve, ClinOp, and Document Management using React.js.",
    "Utilized modern frontend technologies such as Redux, React Hooks, and component-based architecture to build scalable and maintainable UIs.",
    "Gained hands-on experience in production deployments, performing release validations, and addressing last-minute changes under tight timelines.",
    "Resolved critical frontend issues in production, ensuring minimal user impact and maintaining application availability.",
    "Practiced Agile methodology, consistently delivered ahead of deadlines, and was awarded “Star of the Month” for exceptional code quality and ownership."
    ],
  },
  {
    title: "Programmer Analyst Trainee",
    company_name: "Cognizant",
    icon: "/company/cognizant.png",
    iconBg: "#F5F5F5",
    date: "Jan 2022 - Jul 2022",
    points: [
     "Completed structured training in Frontend Development, focusing on React.js, JavaScript, HTML5, and CSS3, while grasping core concepts quickly and showing strong enthusiasm for UI development.",
    "Developed functional web applications like a Staff & Store Management System and a Nursery Plant Blog, demonstrating frontend design and layout skills.",
    "Applied clean code practices, component reusability, and semantic HTML with mentorship, enhancing code structure and quality.",
    "Engaged in code reviews and explored modern frontend tools and best practices to boost project performance and maintainability."
    ],
  },
];
