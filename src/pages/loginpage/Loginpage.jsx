// import "./registration.css";
import "../registrationpage/registration.css";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import Login from "../../components/login/Login";

const Loginpage = () => {
  return (
    <div className="registration">
      <div className="registrationWrapper">
        <div className="registrationLeft">
          <div className="registrationLogo">
            <SensorOccupiedIcon />
            <h1>Connnect Me</h1>
          </div>
        </div>
        <div className="registrationRight">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
