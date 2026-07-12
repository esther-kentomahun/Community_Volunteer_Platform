import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Applications from "../VolunteerPages/Applications";
function Opportunities(){
const [ projects , setProjects ] = useState([]);
const [ search , setSearch] = useState("");

useEffect(()=>{
    const storedProjects = JSON.parse(localStorage.getItem("allPostedOpportunities")) || [];
    setProjects(storedProjects);
    // console.log(storedProjects);
}, [])

const filteredProjects = projects.filter(project =>{
    return(
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.location.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase())
    )
    console.log("filtered",filteredProjects);
    
})



return(
    <div>
        <div className=" w-full   shadow-xl h">
             <div className="lg:w-1/2  mx-auto mb-4 p-3 rounded-xl shadow-lg text-black">
                 <input
                 placeholder="Search Projects"
                 value={search}
                 onChange={(e)=> setSearch(e.target.value)}
                 className="w- bg--200 outline-none w-full h-full text-black"
            />
             </div>

             <div className="grid grid-cols-1 md:col-2 lg:grid-cols-3 p-3  g-9" >
              {
                filteredProjects.length > 0 ? (

                    filteredProjects.map((project)=>(
    
                    <div className="p-6 mt-4 md:mt-6 border  hover:shadow-lg transition duration-300 rounded-xl bg- flex flex-col justify-between" key={project.id}>
                        <h2 className="font-bold text-lg text-blue-800">{project.title} </h2>
                  <p>{project.description}</p>
                  <NavLink to= {`/VolunteerDashboard/Apply/${project.id}`} className="bg-blue-900 rounded-lg p-2 mt-3 text-white   text-center " >
                    Apply 
                  </NavLink>
                    </div>
                    ) )  
                ) : (
                     <div className="col-span-full text-center py-10">
                         <h2 className="text-xl font-bold">
                            No results found
                          </h2>

                           <p className="text-gray-500">
                       No Projects match "{search}"
                      </p>
                    </div>
                )
                
         
              }
               



             </div>
        </div>
    </div>
)
}
export default Opportunities