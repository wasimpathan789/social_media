import Email from "../../components/email/Email"
import "./emailpage.css"
import Navbar from '../../components/navbar/Navbar.jsx'
import Sidebar from '../../components/sidebar/Sidebar.jsx'

const Emailpage = () => {
  return (
    <div>
    <Navbar/>
    <div className="emailPageContainer">
        <Sidebar/>
        <Email/>

    </div>
  
</div>
  )
}

export default Emailpage
