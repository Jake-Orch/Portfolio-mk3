import { BiHomeAlt2, BiSolidHomeAlt2 } from "react-icons/bi";
import { BsPerson, BsFillPersonFill, BsPhoneFill } from "react-icons/bs";
import { AiOutlineProject, AiFillProject, AiOutlineMail, AiFillMail } from "react-icons/ai";
import { FiDownload } from "react-icons/fi"
import { FaMapMarkedAlt } from "react-icons/fa"
import logos from "./assets/logos"
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
    cName: cName
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
    path: "/Portfolio-mk3/",
    icon1: <FiDownload />,
    cName: cName + " nav_side_download"
  }
];

export const projects = [
  {
    name: "WizDumb",
    description: "WizDumb is an e-learning platform that offers a wide range of short courses in JavaScript, HTML, CSS, Node.js, Express.js, GitHub, and React. The platform aims to provide a comprehensive learning experience for individuals looking to enhance their skills and knowledge in web development technologies.",
    tools: ["Tailwind", "MongoDB", "GraphQL", "React"],
    img: images.WizDumb,
    alt: "WizDumb Homepage",
    deployed: "https://wizdumb-app-a832fc305640.herokuapp.com/",
    git: "https://github.com/Cdrcar/Wizdumb",
  },
  {
    name: "SafeKeeping",
    description: "SafeKeeping is School Management System where teachers can upload information on teachers, students, parents and classes. They can view the information uploaded on the webpage and update the database through the application",
    tools: ["BootStrap", "JavaScript", "Handlebars", "mySQL"],
    img: images.SafeKeeping,
    alt: "Safe Keeping Homepage",
    deployed: "https://safekeeping.herokuapp.com/",
    git: "https://github.com/Jake-Orch/Project2",
  },
  {
    name: "Note Maker PWA",
    description: "This application uses PWA principles to allow users to create and retrieve their notes either when online or offline. Users notes are stored inside the browser using IndexedDB. Users also have the option to install the application locally.",
    tools: ["JavaScript", "WebPack"],
    img: images.NoteMakerPWA,
    alt: "Note Maker PWA Homepage",
    deployed: "https://note-maker-pwa-48cf86482d7b.herokuapp.com/",
    git: "https://github.com/Jake-Orch/myNoteMakerPWA",
  },
  {
    name: "Weather Dashboard",
    description: "This applications purpose is to give accurate readings of the weather using openweathermap API. Once they enter their location of choice, they are greated with 2 groups of information, the current forecast and a 5 day forecast.",
    tools: ["JavaScript"],
    img: images.WeatherDashboard,
    alt: "Weather Dashboard Homepage",
    deployed: "https://jake-orch.github.io/Weather-dashboard/",
    git: "https://github.com/Jake-Orch/Weather-dashboard",
  }
];

export const info =
{
  tagline: "I'm Jake Orchard, Front & Back End Web Developer",
  desc: "I am a Junior Web Devloper and alumni of University of Birmingham's Full Stack Web Development bootcamp, dedicated to learning and developing myself. I am keen on learning all aspects of Web Devlopment and greatful for any opportunity to gain more knowledge in the field. I have a wide range of skills for Front-End development being HTML, CSS, JavaScript, React, Tailwind and Bootstrap. Also, for Back End my skills include JavaScript, Express.js, Node.js, mySQL, mongoDB. I work very well in teams, having great communication skills and a friendly and polite attitude, there is no better feeling of than when everyones work comes together to produce an outstanding project.",

};

export const icons = [
  {
    title: "HTML",
    logo: logos.HTML5,
    cl: "html"
  },
  {
    title: "CSS",
    logo: logos.CSS3,
    cl: "css"
  },
  {
    title: "JavaScript",
    logo: logos.JAVASCRIPT,
    cl: "javascript"
  },
  {
    title: "Node.js",
    logo: logos.NODEJS,
    cl: "node"
  },
  {
    title: "React.js",
    logo: logos.REACT,
    cl: "react"
  },
  {
    title: "MongoDB",
    logo: logos.MONGODB,
    cl: "mongo"
  },
  {
    title: "mySQL",
    logo: logos.MYSQL,
    cl: "mysql"
  },
  {
    title: "Bootstrap",
    logo: logos.BOOTSTRAP,
    cl: "bootstrap"
  },
  {
    title: "Tailwind",
    logo: logos.TAILWIND,
    cl: "tailwind"
  },
]

export const contactInfo = [
  {
    title: "Email",
    msg: "Contact me via my email",
    icon: <AiFillMail />,
    value: "jakeorcharddev@gmail.com"
  },
  {
    title: "Mobile Number",
    msg: "Contact me via phone",
    icon: <BsPhoneFill />,
    value: "+447-947-552-803"
  },
  {
    title: "Home Address",
    msg: "Here is my home address",
    icon: <FaMapMarkedAlt />,
    value: "Rugeley, Staffordshire, UK"
  },
]