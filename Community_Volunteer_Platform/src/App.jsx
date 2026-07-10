import {BrowserRouter , Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./components/home/Home.jsx";
import NgoDashboard from "./pages/NgoDashboard.jsx";
import VolunteerDashboard from "./pages/VolunteerPages/VolunteerDashboard.jsx";
import VolunteerNav from "./components/User/Volunteer_Nav.jsx";
import Profile from "./pages/VolunteerPages/Profile.jsx";
import DashboardHome from "./pages/VolunteerPages/DashboardHome.jsx"

function App() {
  return (
    <div>
      {/*<NgoDashboard />*/}
      {/*<Login />*/}
      {/*<Home />*/}
     <BrowserRouter>
     <Routes>
      <Route path="/" element= { <Home/> } />
      <Route path="/login" element= { <Login/> } />

      <Route path="/VolunteerDashboard" element= { <VolunteerDashboard/> }>
      <Route index element={<DashboardHome/>} />
      <Route path="Profile" element={<Profile />} />
      
       </Route>

     </Routes>
     </BrowserRouter> 
    </div>
  );
}

export default App; 