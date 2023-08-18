import {BiHomeAlt2, BiSolidHomeAlt2} from "react-icons/bi";
import {BsPerson, BsFillPersonFill} from "react-icons/bs";
import {AiOutlineProject, AiFillProject, AiOutlineMail, AiFillMail} from "react-icons/ai";
import {FiDownload} from "react-icons/fi"
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
]

export const projects = [
    {
        name: "WizDumb",
        img: images.WizDumb,
        alt: "WizDumb Homepage",
        deployed: "https://wizdumb-app-a832fc305640.herokuapp.com/",
        git: "https://github.com/Cdrcar/Wizdumb",
      },
      {
        name: "Safe Keeping",
        img: images.SafeKeeping,
        alt: "Safe Keeping Homepage",
        deployed: "https://safekeeping.herokuapp.com/",
        git: "https://github.com/Jake-Orch/Project2",
      },
      {
        name: "Weather I Go",
        img: images.WeatherIGo,
        alt: "Weather I Go Homepage",
        deployed: "https://faithscoding.github.io/weather-i-go/",
        git: "https://github.com/FaithsCoding/weather-i-go",
      },
      {
        name: "Note Maker PWA",
        img: images.NoteMakerPWA,
        alt: "Note Maker PWA Homepage",
        deployed: "https://note-maker-pwa-48cf86482d7b.herokuapp.com/",
        git: "https://github.com/Jake-Orch/myNoteMakerPWA",
      },
      {
        name: "Weather Dashboard",
        img: images.WeatherDashboard,
        alt: "Weather Dashboard Homepage",
        deployed: "https://jake-orch.github.io/Weather-dashboard/",
        git: "https://github.com/Jake-Orch/Weather-dashboard",
      },
      {
        name: "Quiz",
        img: images.Quiz,
        alt: "Quiz Homepage",
        deployed: "https://jake-orch.github.io/Quiz/",
        git: "https://github.com/Jake-Orch/Quiz",
      },
]