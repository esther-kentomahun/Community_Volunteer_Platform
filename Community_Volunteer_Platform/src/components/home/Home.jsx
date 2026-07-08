import Footer from "../home/Footer.jsx";
import Navbar from "../home/Navbar.jsx";


function Home() {
  return (
    <div className="bg--300 min-h-screen flex flex-col">
      <Navbar />

      <section className="py-1 ">
        <div className="max-w-6xl mx-auto bg-teal-500 rounded-3xl  p-6 text-dark">
          <h1 className="text-5xl font-bold text-center">
            Find Volunteer Opportunities
          </h1>
          <p className="text-center mt-4 max-w-lg mx-auto">
            Connect with organizations and discover meaningful volunteer
            opportunities near you.
          </p>
          <div className="flex justify-center gap-6 mt-10">
            <div className="w-16 h-16 mt-8 rounded-full bg-gray-300"></div>

            <div className="w-24 h-24 mt-6 rounded-full bg-gray-300"></div>

            <div className="w-16 h-16  mt-4 rounded-full bg-gray-300"></div>
          </div>
          <div className="bg-white  rounded-full lg:w-1/2 mx-auto  p-2 px-2 flex  items-center justify-between mt-12">
            <input
              placeholder="Search"
              className="w-full h-full outline-none "
            />
            <button className="bg-black text-white px-4 pb-1 pt-1 text-center rounded-3xl">
              search
            </button>
          </div>
          <p className="text-center mt max-w-lg mx-auto mt-2">
            Search for volunteer opportunities by location, cause, or
            organization. Find the perfect way to give back to your community.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-9xl mx-aut bg-teal-500 rounded-3xl p-10 text-dark mt-10">
          <h1 className="text-center p-2 text-3xl mb-3 font-bold">
            Discover Opportunities
          </h1>
          <div className="grid lg:grid-cols-3  gap-4">
            <div className="bg-gray-200 p-6 rounded-lg items-start shadow-xl">
              <h2 className="font-bold text-lg">Frontend Developer Internship</h2>
              <p>Kickstart your career by working with experienced developers. Build responsive web 
                applications using React, Tailwind CSS, and JS</p>
              <button className="bg-black p-2 mt-3 text-white  mx-auto text-center ">
                View Details
              </button>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-xl">
              <h2 className="font-bold text-lg">Web3 Developer Bootcamp 2</h2>
              <p>Learn blockchain fundamentals, smart contracts, and 
                (dApp) development through hands-on projects.</p>
                 <button className="bg-black p-2 mt-3 text-white  mx-auto text-center ">
                View Details
              </button>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-xl">
              <h2 className="font-bold text-lg">– UI/UX Design Fellowship</h2>
              <p>Master user-centered design, wireframing, prototyping, and design
                 systems while building a professional portfolio.</p>
               <button className="bg-black p-2 mt-3 text-white  mx-auto text-center ">
                View Details
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-4 py-5">
            <div className="bg-gray-200 p-6 rounded-lg">
              <h2 className="font-bold text-lg">Remote Software Engineering Job 1</h2>
              <p>Join a fast-growing startup and collaborate with global teams to build scalable web applications..</p>
                <button className="bg-black p-2 mt-3 text-white  mx-auto text-center ">
                View Details
              </button>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg">
              <h2 className="font-bold text-lg">Tech Scholarship Program</h2>
              <p>Receive financial support, mentorship, 
                and access to premium learning resources to accelerate your tech journey..</p>
                  <button className="bg-black p-2 mt-3 text-white  mx-auto text-center ">
                View Details
              </button>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg">
              <h2 className="font-bold text-lg">Global Hackathon Challenge</h2>
              <p>Compete with developers worldwide, solve real-world problems, and stand 
                a chance to win exciting prizes and internship offers..</p>
                  <button className="bg-black p-2 mt-3 text-white  mx-auto text-center ">
                View Details
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
