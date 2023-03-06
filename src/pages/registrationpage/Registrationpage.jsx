import "./registration.css";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Register from "../../components/register/Register";

const Registrationpage = () => {
  return (
    <div className="registration">
      <div className="registrationWrapper">
        <div className="registrationLeft">
          <div className="registrationLogo">
            <SensorOccupiedIcon className="registrationLogoIcon" />
            <h1>Connnect Me</h1>
          </div>
        </div>
        <div className="registrationRight">
         <Register/>
        </div>
      </div>
    </div>
  );
};

export default Registrationpage;
