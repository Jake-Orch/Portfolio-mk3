import {BiHomeAlt2, BiSolidHomeAlt2} from "react-icons/bi";
import {BsPerson, BsFillPersonFill} from "react-icons/bs";
import {AiOutlineProject, AiFillProject, AiOutlineMail, AiFillMail} from "react-icons/ai";

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon1: <BiHomeAlt2 />,
        icon2: <BiSolidHomeAlt2 />,
        cName: "nav-text"
    },
    {
        title: "About",
        path: "/about",
        icon1: <BsPerson />,
        icon2: <BsFillPersonFill />,
        cName: "nav-text"
    },
    {
        title: "Projects",
        path: "/projects",
        icon1: <AiOutlineProject />,
        icon2: <AiFillProject />,
        cName: "nav-text"
    },
    {
        title: "Contact",
        path: "/contact",
        icon1: <AiOutlineMail />,
        icon2: <AiFillMail />,
        cName: "nav-text"
    }
]