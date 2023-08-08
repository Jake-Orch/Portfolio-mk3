import {BiHomeAlt2, BiSolidHomeAlt2} from "react-icons/bi";
import {BsPerson, BsFillPersonFill} from "react-icons/bs";
import {AiOutlineProject, AiFillProject, AiOutlineMail, AiFillMail} from "react-icons/ai";

export const SidebarData = [
    {
        title: "Home",
        path: "/Portfolio-mk3/",
        icon1: <BiHomeAlt2 />,
        icon2: <BiSolidHomeAlt2 />,
        cName: "nav-text"
    },
    {
        title: "About",
        path: "/Portfolio-mk3/about",
        icon1: <BsPerson />,
        icon2: <BsFillPersonFill />,
        cName: "nav-text"
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
        cName: "nav-text"
    }
]