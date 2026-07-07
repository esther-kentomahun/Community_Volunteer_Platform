import {BrowserRouter , Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./components/home/Home.jsx";
import NgoDashboard from "./pages/NgoDashboard.jsx";

function App() {
  return (
    <div>
      <Login />
      {/*<Home />*/}
    </div>
  );
}

export default App; 
