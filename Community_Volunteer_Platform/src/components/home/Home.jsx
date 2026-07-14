import { NavLink } from "react-router-dom";
import Footer from "../home/Footer.jsx";
import Navbar from "../home/Navbar.jsx";
import { useNavigate } from "react-router-dom";
import HomeOpportunities from "./HomeOpportunities.jsx";

function Home() {
  const navigate = useNavigate();

  const handleViewDetails = (projectid) => {
    const CurrentUser = JSON.parse(localStorage.getItem("CurrentUser"));
    if (!CurrentUser) {
      alert("Please Login to continue");
      navigate("/login");
      return;
    }
    navigate(`VolunteerDashboard/Apply/${projectid}`);
  };
  const handleViewMore = () => {
    const CurrentUser = JSON.parse(localStorage.getItem("CurrentUser"));
    if (!CurrentUser) {
      const shouldLogin = window.confirm(
        "You need to log in to view more opportunities. Would you like to log in now?",
      );
      if (shouldLogin) {
        navigate("/login");
      }
      return;
    }
    navigate("/VolunteerDashboard/Opportunities");
  };
  return (
    <div className="bg--300 min-h-screen flex flex-col">
      <Navbar />

      <section className="py-1 text-gray-100 ">
        <div className="max-w-6xl mx-auto bg-teal-600 rounded-3xl  p-6 text-dark">
          <h1 className="text-5xl font-bold text-center">
            Find Volunteer Opportunities
          </h1>
          <p className="text-center mt-4 max-w-lg mx-auto">
            Connect with organizations and discover meaningful volunteer
            opportunities near you.
          </p>
          <div className="flex justify-center gap-6 mt-10">
            <div className="w-16 h-16 mt-8 rounded-full bg-gray-300">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"
                alt="Volunteer"
                className="w-16 h-16  rounded-full object-cover  border-white shadow-lg"
              />
            </div>

            <div className="w-24 h-24 mt-6 rounded-full bg-gray-300">
                <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
                alt="Volunteer"
                className="w-24 h-24  rounded-full object-cover  border-white shadow-lg"
              />
            </div>

            <div className="w-16 h-16  mt-4 rounded-full bg-gray-300">
                 <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
                alt="Volunteer"
                className="w-16 h-16  rounded-full object-cover  border-white shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-9xl mx-aut bg-teal-600 rounded-3xl p-10 text-dark mt-2">
          <h1 className="text-center text-white p-2 text-3xl mb-3 font-bold">
            Discover Opportunities
          </h1>
          <HomeOpportunities />

          <button
            onClick={handleViewMore}
            className="bg-teal-500 shadow-xl p-4 rounded-lg mt-3 text-white  mx-auto text-center "
          >
            View More Opportunities
          </button>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
          {/* Left Card */}
          <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-md">
            <div className="p-8">
              <p className="text-sm text-teal-600 mb-2">
                Recommended Opportunities
              </p>

              <h2 className="text-4xl text-teal-600 font-bold leading-tight mb-4">
                Explore suggested <br /> Opportunities
              </h2>

              <p className="text-teal-600">
                Find meaningful ways to give back. Connect with trusted
                organizations and discover volunteer opportunities that match
                your unique skills and interests.
              </p>
            </div>

            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800"
              alt="Meeting"
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Right Card */}
          <div className="bg-teal-600 rounded-3xl p-8 flex items-center justify-center">
            <div className="flex flex-wrap justify-center gap-4 ">
              {[
                "Co-founder",
                "Project Manager",
                "Sales",
                "Developer",
                "Personal Assistant",
                "Board Member",
                "HR Assistant",
                "Entrepreneur",
                "Designer",
                "Managing Director",
                "Founding Partner",
                "Coach",
                "Financial Advisor",
                "Customer Support",
                "Data Analyst",
                "Dispatcher",
              ].map((job, index) => (
                <span
                  key={index}
                  className="bg-white text-teal-800 px-5 py-2 rounded-full text-sm font-medium shadow"
                >
                  {job}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        {/* CTA Section */}
        <div className="bg-teal-500 rounded-3xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Ready for your next hire?
            </h2>

            <p className="text-white/90 mt-3 max-w-xl">
              Connect with talented volunteers and professionals ready to make
              an impact in your organization.
            </p>
          </div>

          <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition">
            Apply and Start Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
