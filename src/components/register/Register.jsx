import "./register.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from "react";
import Registrationpage from "../../pages/registrationpage/Registrationpage";
import Loginpage from "../../pages/loginpage/Loginpage";
import Homepage from "../../pages/homepage/Homepage";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate =useNavigate();
  return (
    <div className="register">
      <div className="registerWrapper">
        <h1 className="registerText">Create Your Account</h1>
        <div className="registerInput">
          <PersonOutlineIcon />
          <input
            placeholder="Your name"
            required
            className="registerInputName"
          />
        </div>
        <div className="registerInput">
          <EmailIcon />
          <input
            placeholder="Your Email Address"
            required
            className="registerInputName"
          />
        </div>
        <div className="registerInput">
          <LockIcon />
          <input
            placeholder="Password"
            required
            className="registerInputName"
          />
        </div>
        <div className="registerInput">
          <LockIcon />
          <input
            placeholder="Confirm Password"
            required
            className="registerInputName"
          />
        </div>
        <div className="registerInputCheckbox">
          <input
          type="checkbox"
            placeholder="Confirm Password"
            required
            className="registerInputName"
          />
          <span >Accept Term and Conditions</span>
        </div>

        <button  className="registerButton">
          Register

        </button>
        <div className="alreadyLoginText">
          Already have account <span onClick={()=>{navigate("/loginpage")}}>login</span>
        </div>
       
      </div>
    </div>
  );
};

export default Register;
