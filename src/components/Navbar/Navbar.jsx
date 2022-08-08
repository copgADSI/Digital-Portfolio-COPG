import "./Styles.css"
import MenuIcon from '@mui/icons-material/Menu';
import useNavbar from "../../hooks/useNavbar";
import { useRef } from "react";
import { MaterialUISwitch } from "./Style";
import { FormControlLabel } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const ulRef = useRef();
    const { showMenu, show } = useNavbar()
    return (
        <nav>
            <div className="logo">COPG DIGITAL</div>
            <MenuIcon id="menu" onClick={() => showMenu(ulRef)} />
            <ul ref={ulRef} className={show ? 'show' : ''} >
                <li> <NavLink to="/">HOME</NavLink> </li>
                <li> <NavLink to="/projects">PROJECTS</NavLink> </li>
                <li> <NavLink to="/posts">POSTS</NavLink> </li>
                <li> <NavLink to="/contact">CONTACT</NavLink> </li>
            </ul>
        </nav>
    )
}

export default Navbar