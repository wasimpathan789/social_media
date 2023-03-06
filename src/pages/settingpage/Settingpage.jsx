import "./settingpage.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Setting from "../../components/setting/Setting";
import Navbar from "../../components/navbar/Navbar";

const Settingpage = () => {
  return (
    <div>
      <Navbar />
      <div className="settingPageContainer">
        <Sidebar />
        <Setting/>
      </div>
    </div>
  )
}

export default Settingpage
