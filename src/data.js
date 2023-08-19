import { BiHomeAlt2, BiSolidHomeAlt2 } from "react-icons/bi";
import { BsPerson, BsFillPersonFill } from "react-icons/bs";
import { AiOutlineProject, AiFillProject, AiOutlineMail, AiFillMail } from "react-icons/ai";
import { FiDownload } from "react-icons/fi"
import images from "./assets/projects";

const cName = "nav-text";

export const sidebarData = [
  {
    title: "Home",
    path: "/Portfolio-mk3/",
    icon1: <BiHomeAlt2 />,
    icon2: <BiSolidHomeAlt2 />,
    cName: cName
  },
  {
    title: "About",
    path: "/Portfolio-mk3/about",
    icon1: <BsPerson />,
    icon2: <BsFillPersonFill />,
    cName: cName
  },
  {
    title: "Projects",
    path: "/Portfolio-mk3/projects",
    icon1: <AiOutlineProject />,
    icon2: <AiFillProject />,
    cName: "nav-text"
  },
  {
    title: "Contact",
    path: "/Portfolio-mk3/contact",
    icon1: <AiOutlineMail />,
    icon2: <AiFillMail />,
    cName: cName
  },
  {
    title: "Download",
    path: "/Portfolio-mk3/", //Temporary
    icon1: <FiDownload />,
    cName: cName
  }
];

export const projects = [
  {
    name: "WizDumb",
    description: "WizDumb is an e-learning platform that offers a wide range of short courses in JavaScript, HTML, CSS, Node.js, Express.js, GitHub, and React. The platform aims to provide a comprehensive learning experience for individuals looking to enhance their skills and knowledge in web development technologies. With user-friendly interfaces and interactive content, WizDumb makes learning fun and accessible to users of all skill levels.",
    tools: ["HTML", "CSS", "Tailwind", "MongoDB", "GraphQL", "React"],
    img: images.WizDumb,
    alt: "WizDumb Homepage",
    deployed: "https://wizdumb-app-a832fc305640.herokuapp.com/",
    git: "https://github.com/Cdrcar/Wizdumb",
  },
  {
    name: "Safe Keeping",
    description: "SafeKeeping is Nursery/school Management System where teachers can upload information on teachers, students, parents and classes. They can view the information uploaded on the webpage and make changes by updating the database or removing users and classes from the database",
    tools: ["HTML", "BootStrap", "JavaScript", "Handlebars.js", "mySQL"],
    img: images.SafeKeeping,
    alt: "Safe Keeping Homepage",
    deployed: "https://safekeeping.herokuapp.com/",
    git: "https://github.com/Jake-Orch/Project2",
  },
  {
    name: "Weather I Go",
    description: "Weather I Go is going to allow users to search for a city, type of event, genres, date and time of event, price range, And find events that fit within their given parameters using data from the ticketmaster API, then using weather API, so the user can also see what the weather is like on that day.",
    tools: ["HTML", "JavaScript", "TailWind"],
    img: images.WeatherIGo,
    alt: "Weather I Go Homepage",
    deployed: "https://faithscoding.github.io/weather-i-go/",
    git: "https://github.com/FaithsCoding/weather-i-go",
  },
  {
    name: "Note Maker PWA",
    description: "This application uses PWA principles to allow users to create and retrieve their notes either when online or offline. Users notes are stored inside the browser using IndexedDB. Users also have the option to install the application locally and have the same access and functionality they would using the web address.",
    tools: ["HTML", "JavaScript", "WebPack"],
    img: images.NoteMakerPWA,
    alt: "Note Maker PWA Homepage",
    deployed: "https://note-maker-pwa-48cf86482d7b.herokuapp.com/",
    git: "https://github.com/Jake-Orch/myNoteMakerPWA",
  },
  {
    name: "Weather Dashboard",
    description: "This applications purpose is to give accurate readings of the weather which the user inputs themselves, using openweathermap API. Once they enter their location of choice, they are greated with 2 groups of information, the current forecast and a 5 day forecast. This assignment was meant to test my ability using API's, namely bootstrap and openweathermap API. And get me to practice all the skills i have already learned during the course.",
    tools: ["HTML", "CSS", "JavaScript"],
    img: images.WeatherDashboard,
    alt: "Weather Dashboard Homepage",
    deployed: "https://jake-orch.github.io/Weather-dashboard/",
    git: "https://github.com/Jake-Orch/Weather-dashboard",
  },
  {
    name: "E Commerce Back End",
    description: "This application is used to help the user control their data. The user has the options of searching through their data, uploading more data to the database, editing existing data or deleting unwanted data.",
    tools: ["JavaScript", "Express.js", "mySQL"],
    img: images.Quiz,
    alt: "E Commerce Back End",
    deployed: "https://github.com/Jake-Orch/E-Commerce-Back-End",
    git: "https://github.com/Jake-Orch/Quiz", // Temporary
  },
];