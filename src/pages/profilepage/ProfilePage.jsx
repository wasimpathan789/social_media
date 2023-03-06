import Navbar from "../../components/navbar/Navbar"
import Profile from "../../components/profile/Profile"
import Sidebar from "../../components/sidebar/Sidebar"
import "./profilePage.css"

const ProfilePage = () => {
  return (
    <div>
        <Navbar/>
        <div className="profilePageContainer">
            <Sidebar/>
            <Profile/>

        </div>
      
    </div>
  )
}

export default ProfilePage
