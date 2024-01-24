import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  IdealCeramicsLogo,
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
  name: "Japheth Rutoh",
  initials: "JR",
  location: "Nairobi, Kenya, EAT",
  locationLink: "https://www.google.com/maps/place/Nairobi",
  about:
    "Data Analyst/Engineer with a knack of problem solving using data.",
  summary:
    "A dedicated Data Analyst with a strong enthusiasm for deriving meaningful insights from data by employing effective cleaning and visualization techniques to address challenges. Committed to ongoing learning and staying abreast of relevant technologies, I possess the skills to handle and monitor data from various sources, including SQL and Excel. My proficiency lies in recognizing and communicating valuable insights across diverse datasets to inform decision-making processes.",
  // avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  // personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "jruhtz@gmail.com",
    tel: "+254700467044",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/RutoJaphe",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rutojapheth/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/j_rutoh",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Jomo Kenyatta University of Agriculture and Technology - JKUAT",
      degree: "Bachelor of Science in Computer Technology",
      start: "2015",
      end: "",
    },
  ],
  work: [
    {
      company: "Ideal Ceramics Kenya",
      link: "https://www.idealceramics.com",
      badges: [],
      title: "Data Analyst",
      logo: IdealCeramicsLogo,
      start: "Apr 2023",
      end: "Aug 2023",
      description:
        "Generated regular sales reports on a weekly, bi-weekly, and monthly basis, as well as on an ad-hoc " +
        "basis, to keep managers and directors informed. Issued daily follow-up reminders to sales personnel " +
        "regarding outstanding quotations, contributing significantly to the achievement of sales targets " +
        "during the July sales period. This proactive approach played a pivotal role in the company's " +
        "progress toward reaching the Ksh. 1 billion target for the financial year 2022/2023.Enhanced sales " +
        "dashboards as needed and as requested by directors and sales managers, to optimize functionality and " +
        "user experience.",
    },


  ],
  skills: [
    "Python",
    "Pandas",
    "Numpy",
    "SQL",
    "Microsoft Power BI",
    "MS Excel",
    "Data Visualization",
    "Data Wrangling",
  
  ],
  projects: [
    {
      title: "Ford Go Bike",
      techStack: [
        "Data Visualization",
        "Pandas",
        "Numpy",
        "Matplotlib",
        "Seaborn",
        "Plotly",
      ],
      description: "Analysis and Visualization of bike sharing data from the San " +
      "Francisco Bay Area for the " +
      "month of February 2019.",
      logo: [],
      link: {
        label: "Ford Go Bike Share",
        href: "https://github.com/RutoJaphe/FordGo_Bike_Data_Visualisation_Udacity",
      },
    },
    {
      title: "Patients No Show",
      techStack: ["Data Wrangling", "Numpy", "Pandas", "Exploratory Data Analysis",
      "Matplotlib", "Seaborn"],
      description:
        "Exploratory Data Analysis of a " +
        "medical appointments no shows " +
        "dataset from Brazil.",
      logo: MonitoLogo,
      link: {
        label: "Patients No Show",
        href: "https://github.com/RutoJaphe/No_Show_Appointments_Udacity",
      },
    },
    {
      title: "WeRateDogs Twitter",
      techStack: ["Data Wrangling", "Data Cleaning", "Numpy", "Pandas", "BeautifulSoup"
      ,"Tweepy", "Seaborn", "Matplotlib"],
      description:
        "Data Wrangling from WeRateDogs " +
        "Twitter account. Data was " +
        "gathered from multiple sources " +
        "that include flat files, and " +
        "Twitter API data before " +
        "cleaning.",
      logo: JarockiMeLogo,
      link: {
        label: "WeRateDogs",
        href: "https://github.com/RutoJaphe/WeRateDogs_udacity",
      },   },
    
  ],
} as const;
