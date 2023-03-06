import "./profile.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profileWrapper">
        <div className="profileTop">
          <img className="profileTopImage" src="./assets/station.jpg" alt="" />
        </div>
        <div className="profileCenter">
          <div className="profileCenterLeft">
            <img src="./assets/profile/profilePic-6.jpg" alt="" />
            <div className="profileCenterLeftName">
              <h3>Mohammad Sami</h3>
              <span>sami@gmail.com</span>
            </div>
          </div>
          <div className="profileCenterRight">
            <div className="addFriend">Add Friend</div>
            <button> <MailOutlineIcon /></button>
            <button> <MoreHorizIcon /></button>
          </div>
        </div>
        <div>
          <hr />
        </div>
        <div className="profileBottom">
          <ul className="profileBottomList">
          <li>About</li>
          <li>Friends</li>
          <li>Photos</li>
          <li>Videos</li>
          <li>Group</li>
          <li>Eventssssss</li>

          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default Profile;
