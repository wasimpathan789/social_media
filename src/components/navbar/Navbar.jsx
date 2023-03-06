import "./navbar.css";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbarLogo">
            <img src="assets/userpng.png" alt="" className="navbarLogoImage" />
            <span className="navbarLogoText"> 
                <Link to={"/homepage"} className="navbarLogoLink">ConnectMe</Link>
            </span>
        </div>
        <div className="navbarSearch">
            <SearchIcon/>
            <input placeholder="Search Here" className="navbarSearchInput" />
        </div>
        <div className="navbarIcons">
            <PersonIcon/>
            <NotificationsIcon/>
            <ChatBubbleIcon/>
            <DarkModeIcon/>
            <img src="assets/userpng.jpg" alt="" className="navbarIconsImage"  />

        </div>
      
    </div>
  )
}

export default Navbar
