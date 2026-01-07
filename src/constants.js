// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Education Section Logo's
import NITAPLogo from "./assets/education_logo/NIT_Andhra_Pradesh.png";
import RKCollege from './assets/education_logo/R.K. College.png';
import CBSE  from "./assets/education_logo/CBSE.png";

// Project Section Logo's
import EdTech from './assets/work_logo/EdTech-1.png';
import WeatherApp from './assets/work_logo/Weather App-1.png';
import ShoppingCart from './assets/work_logo/ShoppingApp-1.png';
import PasswordGenerator from './assets/work_logo/Password Generator.png';
import BlogWeb from "./assets/work_logo/BlogWebsite.png";
import ENTNT_Talentflow from "./assets/work_logo/ENTNT_Talentflow.png";
import Uber_Clone from "./assets/work_logo/Uber_Logo.png"

export const certificates = [
  {
    id: 1,
    title: "Cloud Computing",
    organization: "IIT Kharagpur",
    image: "https://res.cloudinary.com/dqtaptmuv/image/upload/v1760021680/CloudComputing_b9ggst.png",
    link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs118/Course/NPTEL24CS118S106210035503872546.pdf"
  },
  {
    id: 2,
    title: "Data Base Management System",
    organization: "IIT Kharagpur",
    image: "https://res.cloudinary.com/dqtaptmuv/image/upload/v1760021679/DBMS_zmfxwa.png",
    link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs145/Course/NPTEL25CS145S54810006809165261.pdf"
  }
];


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];


  export const education = [
    {
      id: 0,
      img: NITAPLogo,
      school: "National Institute of Technology Andhra Pradesh",
      date: "Nov 2022 - May 2026",
      grade: "7.05 CGPA",
      desc: "I am a final-year B.Tech student in Electrical and Electronics Engineering at NIT Andhra Pradesh.",
      degree: "Bachelor of Technology - B.Tech(EEE)",
    },
    {
      id: 1,
      img: RKCollege,
      school: "R.K. College, Madhubani, Bihar",
      date: "May 2021 - Feb 2022",
      grade: "80.6%",
      desc: "I completed my class 12 education from R.K. College, Madhubani, under the State board(BSEB), where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "BSEB(XII) - PCM",
    },
    {
      id: 2,
      img: CBSE,
      school: "Holy Central School, Jaynagar, Bihar",
      date: "Apr 2019 - March 2020",
      grade: "80.0%",
      desc: "I completed my class 10 education from Holy Central School, Jaynagar, Bihar under the CBSE board.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "EdTech Plateform using MERN Stack",
      description:
        "I built a full-stack online learning web application using the MERN stack (MongoDB, Express.js, React, Node.js). It supports role-based authentication (student, instructor, and admin) with JWT, enabling secure access and management. Instructors can create, update, and manage courses with video lectures (hosted via Cloudinary), while students can browse courses, enroll, and track their learning progress. The platform includes an admin panel to manage users and courses, and integrates Razorpay for payment processing. I used Tailwind CSS for styling, focusing on responsiveness and usability. This project demonstrates my ability to design and implement end-to-end features, from backend APIs and database modeling to frontend UI and payment workflows.",
      image: EdTech,
      tags: ["React JS", "Node.js", "MongoDB", "Express.js", "JavaScript", "TailwindCSS", "API"],
      github: "https://github.com/indrajeetPanjiyar/MERN-EdTech-Platform",
      webapp: "https://mern-ed-tech-frontend.vercel.app/",
    },
    {
      id: 1,
      title: "Uber Clone - Ride Sharing Platform",
      description: "A full-stack Uber-inspired ride-sharing platform featuring real-time ride tracking, driver and user authentication, fare calculation, and simulated payments. The system integrates Google Maps for live navigation, Socket.IO for real-time communication, and Razorpay for secure transactions — offering a seamless experience for both users and captains.",
      image: Uber_Clone,
      tags: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Socket.IO"],
      github: "https://github.com/indrajeetPanjiyar/UBER_CLONE",
      webapp: "https://uber-clone-ten-gilt.vercel.app",
    },
    {
      id: 2,
      title: "ENTNT_Talentflow - Job Portal Website",
      description: "TalentFlow is a React-based hiring management platform that streamlines recruitment by allowing HR teams to create jobs, manage candidates through various stages, and design role-specific assessments — all within a sleek, responsive interface. Built with Vite, Tailwind CSS, and IndexedDB for client-side data persistence, it delivers a seamless, backend-free experience with real-time updates and intuitive workflows.",
      image: ENTNT_Talentflow,
      tags: ["React", "Vite", "Tailwind CSS", "IndexedDB"],
      github: "https://github.com/indrajeetPanjiyar/ENTNT_Talentflow",
      webapp: "https://entnt-talentflow-inky.vercel.app/",
    },
    {
      id: 3,
      title: "WeatherApp",
      description:
        "This is a responsive, modern web application that fetches and displays real-time weather data using the OpenWeatherMap API. Built with plain HTML, CSS, and JavaScript, the app allows users to search any city globally and view current weather details—temperature, “feels like” reading, humidity, wind speed, and descriptive conditions. It dynamically updates a weather icon based on conditions and is styled with a clean, minimal UI to ensure readability and usability across devices. This project demonstrates my front-end skills in DOM manipulation, asynchronous API calls (fetch), responsive design, and handling real-world data integration.",
      image: WeatherApp,
      tags: ["HTML", "CSS", "JavaScript", "API"],
      github: "https://github.com/indrajeetPanjiyar/weather-app",
      webapp: "https://weather-app-ten-omega-74.vercel.app/",
    },
    {
      id: 4,
      title: "React Redux Shopping App",
      description:
        "This is a modern e-commerce prototype built using React and Redux Toolkit to manage state across the application. Users can browse a list of products, add or remove items from their cart, adjust quantities, and see the total price automatically updated in real time. The cart state is persisted via Redux slices and global store architecture. The UI is styled using CSS (or Tailwind CSS) to deliver a clean, responsive experience. Key functionalities include clearing the entire cart, handling edge cases (e.g. zero quantity), and seamless user experience transitions. This project highlights my skills in component-based architecture, state management, event handling, and front-end best practices in a React + Redux environment.",
      image: ShoppingCart,
      tags: ["React JS", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/indrajeetPanjiyar/react-redux-shopping-app",
      webapp: "https://react-redux-shopping-app-nine.vercel.app/",
    },
    {
      id: 5,
      title: "Password Generator",
      description:
        "This project is a lightweight, interactive web app built with HTML, CSS, and JavaScript that helps users generate strong, randomized passwords. Users can specify criteria such as length, inclusion of uppercase/lowercase letters, numbers, and special symbols. The app ensures password complexity and prevents predictable patterns, making it ideal for everyday use. Through this project, I demonstrated skills in DOM manipulation, event handling, and logic for randomization. It reflects my understanding of user-centric design and front-end development fundamentals—especially how to build intuitive tools that meet real security needs.",
      image: PasswordGenerator,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/indrajeetPanjiyar/password-generator",
      webapp: "",
    },
    {
      id: 6,
      title: "React Blog Website",
      description:
        "This is a dynamic, responsive blog site built using React, React Router, and the Context API, styled beautifully with Tailwind CSS. Users can view a list of blog posts, filter by categories and tags, and navigate seamlessly between pages thanks to client-side routing. Global state management via React’s Context ensures clean handling of things like category/tag filters. The UI is mobile-friendly, modern, and designed with usability in mind. Under the hood, it’s a Create React App setup, structured with reusable components, pages, and context logic. This project demonstrates my frontend skills: component architecture, routing, state management, filtering logic, and responsive design.",
      image: BlogWeb,
      tags: ["React", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/indrajeetPanjiyar/blog-website",
      webapp: "",
    },
  ];  