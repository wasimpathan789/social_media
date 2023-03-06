import Homepage from "./pages/homepage/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// import ProfilePage from "./pages/profilepage/ProfilePage.jsx";
import ProfilePage from "./pages/profilepage/ProfilePage";
import Registrationpage from "./pages/registrationpage/Registrationpage";
import Loginpage from "./pages/loginpage/Loginpage";
import Emailpage from "./pages/emailpage/Emailpage";
// import Homepage from "./pages/homepage/Homepage";
import Settingpage from "./pages/settingpage/Settingpage";
function App() {
  return (
    <Router>
      <Routes>
      
        <Route path="/registerationpage" element={<Registrationpage />} />
        <Route path="/loginpage" element={<Loginpage />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/" element={<Loginpage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/settingpage" element={<Settingpage />} />



      </Routes>
      {/* <Loginpage /> */}
      {/* <Emailpage/> */}
      {/* <Settingpage/> */}
    </Router>
  );
}

export default App;
