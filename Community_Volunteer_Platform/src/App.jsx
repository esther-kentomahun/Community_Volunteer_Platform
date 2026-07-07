import {BrowserRouter , Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./components/home/Home.jsx";
import Dashboard from "./components/Admin/Dashboard.jsx";

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element= { <Home/> } />
      <Route path="/login" element= { <Login/> } />
      <Route path="/Dashboard" element= { <Dashboard/> } />

     </Routes>
     </BrowserRouter> 
    </div>
  );
}

export default App; 
