import React from 'react'
import './login.css';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="register">
    <div className="registerWrapper">
      <h1 className="registerText">Please Login First</h1>
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
      
      <div className="registerInputCheckbox">
        <input
        type="checkbox"
          placeholder="Confirm Password"
          required
          className="registerInputName"
        />
        <div className="forgetPassword">
        <span >Remembered me</span>
        <p>Forgot Password?</p>


        </div>
        
      </div>

      <button onClick={()=>{navigate("/homepage")}} className="registerButton">
        Login

      </button>

      <div className="alreadyLoginText">
      Don't have account  <Link className='loginRegisterText' to={"/registerationpage"}>register</Link>
        
      </div>
      {/* <div className="alreadyLoginText">
        <Link>Don't have account <span onClick={()=>{navigate("/registerationpage")}}>register</span></Link>
        
      </div> */}
     
    </div>
  </div>
  )
}

export default Login
