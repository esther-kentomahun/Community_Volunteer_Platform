import {BrowserRouter , Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./components/home/Home.jsx";

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element= { <Home/> } />
      <Route path="/login" element= { <Login/> } />
     </Routes>
     </BrowserRouter> 
    </div>
  );
}

export default App; 
