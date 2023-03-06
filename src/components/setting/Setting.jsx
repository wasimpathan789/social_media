import "./setting.css";
import { Link } from "react-router-dom";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import HttpsIcon from "@mui/icons-material/Https";

const Setting = () => {
  return (
    <div className="setting">
      <div className="settingWrapper">
        <h1>Setting</h1>
        <div className="settingGeneral">
          <h3>General</h3>
          <div className="accountInformation">
            <Link className="accountInformation">
              <AccountBalanceIcon className="settingIcons" />
              Account Information
            </Link>
          </div>
          <div className="accountInformation">
            <Link className="accountInformation">
              <AccountBalanceIcon className="settingIcons" />
              Account Information
            </Link>
          </div>
          <div className="accountInformation">
            <Link className="accountInformation">
              <AccountBalanceIcon className="settingIcons" />
              Account Information
            </Link>
          </div>
          <div className="savedAddress">
            <Link>
              <LocationOnIcon />
              Saved Address
            </Link>
          </div>
          <div className="socialAccount">
            <TwitterIcon />
            <Link> Social Account</Link>
          </div>
        </div>
        <div className=" settingAccount"></div>
        <div className="settingOther"></div>
      </div>
    </div>
  );
};

export default Setting;
