import Login from "./pages/Login";
import Home from "./components/home/Home.jsx";
import NgoDashboard from "./pages/NgoDashboard.jsx";

function App() {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center justify-start">
      <NgoDashboard />
      {/*<Login />*/}
      {/*<Home />*/}
    </div>
  );
}

export default App;
