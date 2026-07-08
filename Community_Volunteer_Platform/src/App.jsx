import {BrowserRouter , Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./components/home/Home.jsx";
<<<<<<< HEAD
import NgoDashboard from "./pages/NgoDashboard.jsx";
=======
import Dashboard from "./components/Admin/Dashboard.jsx";
>>>>>>> 6cc7c7075155d8438ebfd06c260c961dac411d08

function App() {
  return (
    <div>
<<<<<<< HEAD
      {/*<NgoDashboard />*/}
      {/*<Login />*/}
      {/*<Home />*/}
=======
     <BrowserRouter>
     <Routes>
      <Route path="/" element= { <Home/> } />
      <Route path="/login" element= { <Login/> } />
      <Route path="/Dashboard" element= { <Dashboard/> } />

     </Routes>
     </BrowserRouter> 
>>>>>>> 6cc7c7075155d8438ebfd06c260c961dac411d08
    </div>
  );
}

export default App; 