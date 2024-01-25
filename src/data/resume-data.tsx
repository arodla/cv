import {
    AmbitLogo,
    BarepapersLogo,
    BimLogo,
    CDGOLogo,
    ClevertechLogo,
    ConsultlyLogo,
    EvercastLogo,
    Howdy,
    JarockiMeLogo,
    JojoMobileLogo,
    Minimal,
    MobileVikingsLogo,
    MonitoLogo,
    NSNLogo,
    ParabolLogo,
    TastyCloudLogo,
    YearProgressLogo,
  } from "@/images/logos";
  import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
  
  export const RESUME_DATA = {
    name: "Antonio Rodríguez Laguna",
    initials: "ARL",
    location: "Madrid, Spain",
    locationLink: "https://www.google.com/maps/place/Madrid",
    about:
      "FP&A Manager focused on data driven decisions.",
    summary:
      "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience in working remotely with companies all around the world.",
    avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
    personalWebsiteUrl: "https://arodla.com",
    contact: {
      email: "antonio.rodriguez.laguna@gmail.com",
      tel: "+34627790139",
      social: [
        {
          name: "GitHub",
          url: "https://github.com/arodla",
          icon: GitHubIcon,
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/arodriguezlaguna/",
          icon: LinkedInIcon,
        },
        {
          name: "X",
          url: "https://x.com/arodla90",
          icon: XIcon,
        },
      ],
    },
    education: [
      {
        school: "UNIR",
        degree: "Executive's Master in Financial Management",
        start: "2021",
        end: "2022",
      },
        {
        school: "Universidad Pontificia Comillas - ICADE",
        degree: "Master's Degree in Financial Audit",
        start: "2013",
        end: "2015",
      },
      {
        school: "Universidad Pontificia Comillas - ICADE",
        degree: "Bachelor's Degree in Business Administration",
        start: "2008",
        end: "2013",
      },
    ],
    work: [
      {
        company: "Grupo Proeduca ",
        link: "https://www.grupoproeduca.com/",
        badges: ["Remote"],
        title: "Financial Planning & Analysis Manager",
        logo: ParabolLogo,
        start: "2018",
        end: "2024",
        description:
          "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
      },
      {
        company: "Deloitte",
        link: "https://www2.deloitte.com/es/es.html",
        badges: ["Remote"],
        title: "Experienced Senior Auditor",
        logo: ClevertechLogo,
        start: "2013",
        end: "2018",
        description:
          "Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
      },
      
    ],
    skills: [
      "Financial Modelling",
      "Budgeting",
      "Forecasting",
      "Accounting",
      "Microsoft Excel",
      "PowerBI",
      "Python",
    ],
    projects: [],
  } as const;
  
