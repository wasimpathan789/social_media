import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import Feed from '../../components/feed/Feed.jsx';
import SideRightbar from "../../components/sideRightbar/SideRightbar";



const Homepage = () => {
  return (
    <div>
    <Navbar/>
    <div className="homeContainer">
    <Sidebar/>
    <Feed/>
    <SideRightbar/>

    </div>
   

      
    </div>
  )
}

export default Homepage
