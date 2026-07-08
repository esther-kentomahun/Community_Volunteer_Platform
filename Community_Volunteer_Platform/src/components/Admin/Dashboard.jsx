import { useState } from "react";
function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-gray-200 min-h-screen ">
      <div className="flex">
        <aside
          className={`
            overflow-y-auto 
            
            p-3
            fixed
          top-0
           left-0
          h-screen
         w-64
         z-50
         bg-white 
         shadow-md
         transform
         transition-transform
         duration-300
         ${isOpen ? "translate-x-0" : "-translate-x-full"}
         lg:translate-x-0
        `}
        >
          <div className="flex justify-end p-1 lg:hidden ">
            <button onClick={() => setIsOpen(false)}>✕</button>
          </div>
          <div className="py-5  bg-gray-300 rounded-lg text-center"><span className="text-6xl ">👤</span></div>
          <div className="p-3 mt-1 bg-gray-300 rounded-lg">Dashboard</div>
          <div className="p-3 bg-gray-300 mt-2 rounded-lg">My Applications</div>
          <div className="p-3 mt-1 bg-gray-300 rounded-lg">
            Browse Opportunities
          </div>
          <div className="p-3 mt-1 bg-gray-300 rounded-lg">Profile</div>
          <div className="p-3 mt-1 bg-gray-300 rounded-lg">Help</div>
        </aside>
        <main className="flex-1 p-6 lg:ml-64">
          <header className="flex justify-between items-center">
            <div className="left flex items-center gap-4">
              <button
                className="lg:hidden p-2 rounded-lg bg-white shadow"
                onClick={() => setIsOpen(!isOpen)}
              >
                ☰
              </button>

              <div>
                <h1 className="text-3xl font-bold">Hello, Martha!</h1>

                <p className="text-gray-500">Community Volunteer Platform</p>
              </div>
            </div>
            <div className="right">
              <div className="flex items-center gap-4">🔔 👤</div>
            </div>
          </header>

          <section>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6  mt-3">
              <div className="bg-white rounded-2xl lg:col-span-1 p-6 shadow-md"></div>
              <div className="bg-white rounded-2xl lg:col-span-2 p-6 shadow-md"></div>
            </div>
          </section>

          <section>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6  mt-3">
              <div className="bg-white rounded-2xl lg:col-span-2 p-6 shadow-md"></div>
              <div className="bg-white rounded-2xl lg:col-span-1 p-6 shadow-md"></div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
export default Dashboard;
