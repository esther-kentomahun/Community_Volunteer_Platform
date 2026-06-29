import Footer from "../home/Footer.jsx";
import Navbar from "../home/Navbar.jsx";

function Home() {
  return (
    <div className="bg--300 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20 px-4">
        <h1 className="text-3xl font-bold">
          Welcome to the Home Page
        </h1>
      </main>

      <Footer />
    </div>
  );
}

export default Home; 