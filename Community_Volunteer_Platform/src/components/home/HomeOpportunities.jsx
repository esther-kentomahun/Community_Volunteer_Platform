import { useState , useEffect } from "react";
// import navigate from useNavigate
import { useNavigate } from "react-router-dom";

function HomeOpportunities(){
    const navigate = useNavigate();
   const [Search , setSearch] = useState("")
    const [Opportunities , setOpportunities] = useState([]);
    useEffect(()=>{
        const storedOpportunities = JSON.parse(localStorage.getItem("allPostedOpportunities")) || [];
        setOpportunities(storedOpportunities)
    },[])

     const handleApply = (projectid) =>{
        const CurrentUser = JSON.parse(localStorage.getItem("CurrentUser"));
        if (!CurrentUser) {
            const ViewMore = window.confirm
            ("You need to log in to view more Details . Would you like to log in now?");
            if (ViewMore) {
                
                navigate("/login");
            }
            return;
        }
        navigate(`/VolunteerDashboard/Apply/${projectid}`);
     }
    

       const filteredProjects = Opportunities.filter((project) => {
    return (
      project.title.toLowerCase().includes(Search.toLowerCase()) ||
      project.description.toLowerCase().includes(Search.toLowerCase()) ||
      project.location.toLowerCase().includes(Search.toLowerCase())
    );
  });
return(
    <div>
 <div className="bg-white  rounded-full lg:w-1/2 mx-auto  p-2 px-2 flex  items-center justify-between mb-12">
            <input
            value={Search}
            onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Opportunities"
              className="w-full h-full outline-none "
            />
            <button className="bg-teal-600 text-white px-4 pb-1 pt-1 text-center rounded-3xl">
              search
            </button>
          </div>
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {filteredProjects.length > 0 ? (
                  filteredProjects.map((project) =>
      
           <div key={project.id} className="bg-white p-6 rounded-lg shadow-xl">
              <h2 className="font-bold text-lg">{project.title}</h2>
              <p>{project.description}</p>
                 <button  onClick={()=> handleApply(project.id)} className="bg-teal-600 p-2 mt-3 text-white  mx-auto text-center ">
                View Details
              </button>
            </div>
    )
      
         ):(
             <div className="col-span-full text-center py-">
      <h2 className="text-2xl font-semibold text-white">
        No opportunities found
      </h2>
      <p className="text-white mt-2">
        Try searching with a different keyword.
      </p>
    </div>
         )}

    </div>
    </div>

)
}export default HomeOpportunities