import "./sidebar.css";
import FeedIcon from "@mui/icons-material/Feed";
// import { VideoLibraryIcon } from '@mui/icons-material';
import DuoIcon from "@mui/icons-material/Duo";
import EventIcon from "@mui/icons-material/Event";
import WorkIcon from "@mui/icons-material/Work";
import GroupIcon from "@mui/icons-material/Group";
import ChatIcon from "@mui/icons-material/Chat";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { CloseFriends } from "../../dummyData.js";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebarContainer">
      <ul className="sidebarList">
        <li className="sidebarListItems">
          <FeedIcon />
          Feed
        </li>
        <li className="sidebarListItems">
          <BookmarkIcon />
          Bookmarks
        </li>
        <li className="sidebarListItems">
          <ChatIcon />
          Chats
        </li>
        <li className="sidebarListItems">
          {/* <VideoLibraryIcon/> */}
          <DuoIcon />
          Videos
        </li>
        <li className="sidebarListItems">
          <HelpOutlineIcon />
          Question
        </li>
        <li className="sidebarListItems">
          <WorkIcon />
          Jobs
        </li>
        <li className="sidebarListItems">
          <GroupIcon />
          Groups
        </li>
        <li className="sidebarListItems">
          <EventIcon />
          Eventssss
        </li>
        <li className="sidebarListItems">
          <EventIcon />
          <Link to={"/settingpage"} className="sidebarListItemsLink">Setting</Link>
          
        </li>
        <li className="sidebarListItems">
          <EventIcon />
          <Link to={"/profilepage"} className="sidebarListItemsLink">Author Profile</Link>
          
        </li>
      </ul>
      <div className="sidebarButton">
        <button>Show Moree</button>
      </div>
      <hr />

      <div className="sidebarFriends">
        {CloseFriends.map((cf) => (
            <div key={cf.id} className="sidebarFriend">
              <img src={cf.image} alt="" />
              <span className="sidebarFriendText">{cf.name}</span>
            </div>
         
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
