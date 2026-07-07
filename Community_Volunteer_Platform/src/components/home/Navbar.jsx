// import React, { useState } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" p-4 lg:p-1 bg-teal-500 ">
      <div className="container   bg-amber-4 mx-auto flex items-center justify-between ">
        <div >
          <a
          href=""
          className=""
        >
          Coommunity <b>Volunteer</b> Platform
        </a>
        </div>
        <button
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
          id="menu"
          className="lg:hidden 
          text-neutral-900 
          hover:text-neutral-700
          transition-colors 
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-8 w-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
        <div
          role="menubar"
          className={`
          ${isMenuOpen ? "flex" : "hidden"}
         flex-col gap-4 absolute 
         right-0 left-0 top-16 lg:flex lg:flex-row lg:static lg:shadow-none
          lg:justify-between
         lg:w-full
         p-5
         lg:p-3
         text-center text-lg 
         lg:items-center
          bg-teal-500 shadow-xl `}>
            
          <div  className="flex flex-col gap-4 lg:flex-row lg:justify-around lg:gap- bg-red-5 lg:w-1/2 mx-auto" >
           <Link to="/Dashboard"  onClick={() => setIsOpen(false)}>
            <span  role="menuitem" className="">
            Dashboard
          </span>
           </Link>
          <a href="#" role="menuitem" className="">
            About
          </a>
          <a href="#" role="menuitem" className="">
            Contact
          </a>
           <a href="#" role="menuitem" className="">
            Contact
          </a>
          </div>
          <a
            href="#"
            role="menuitem"
            className="py-4 px-10 bg-teal-700 rounded-lg 
         text-white shadow-xl hover:shadow-none"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
