import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function NgoDashboard() {
    //const [orgName, setOrgName] = useState(["NGO Partner"]);
    const [projects, setProjects] = useState([]);
    const [projectTitle, setProjectTitle] = useState([]); 
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [duration, setDuration] = useState("");
    const [activeTab, setActiveTab] = useState("post-oppurtunity");
    const navigate = useNavigate();
    const [orgName, setOrgName] = useState (() => {
        const savedUser = localStorage.getItem("userData");
        if (savedUser) {
            const parsedUser = JSON.parse(savedUser);
            return parsedUser.fullName || "organization";
        }
        return "Organization Portal";
    });
    //security check in case of bypassers
    // useEffect(() => {
    //     const savedUser = localStorage.getItem("userData");
    //     if (!savedUser) {
    //         alert("Access Denied: Please login to access the organization Management Portal.");
    //         navigate("/login");
    //     }
    // },[navigate]);
    //Application
    const [applicants, setApplicants] = useState(() => {
        //Read the shared storage key
        const savedApps = localStorage.getItem("allVolunteerApplications");
        //load applications if there's any else fall back to empty
        return savedApps ? JSON.parse(savedApps) : [];
    });
    const handleStatusChange = (id, newStatus) => {
        setApplicants((prevApplicants) => {
            const updatedApplicants = prevApplicants.map((applicant) =>
                applicant.id === id ? {...applicant, status: newStatus} : applicant
            );
            localStorage.setItem("allVolunteerApplications",JSON.stringify(updatedApplicants));
            return updatedApplicants;
        });
    };
    const handlePostProject = (e) => {
        e.preventDefault();
        if (!projectTitle.trim() || !description.trim() || !location.trim() ||!duration.trim()) {
            alert("Error: All fields are mandatory. Please fill out Title, Description, Location and Duration");
            return;
        }
        const newProject = {
            id: Date.now(),
            title: projectTitle.trim(),
            description: description.trim(),
            location: location.trim(),
            duration: duration.trim(),
        };
        setProjects([newProject, ...projects]);
        setProjectTitle("");
        setDescription("");
        setLocation("");
        setDuration("");
    };
    return (
        <div className="w-full min-h-screen bg-slate-50 flex flex-col md:flex-row text-left">
            {/*LEFT SIDEBAR NAVIGATION PANEL*/}
            <aside className="w-full md:w-64 bg-white border-r border-gray-200 p-6 flex flex-col justify-between shrink-0">
                <div>
                    {/* Brand/Header Segment */}
                    <div className="mb-8">
                        <h1 className="text-base font-bold text-gray-900 tracking-tight">{orgName} Admin</h1>
                        <p className="text-xs text-gray-400 mt-0.5">NGO Portal v1.0</p>
                   </div>
                   {/* Navigation Links matching the design blueprint tabs */}
                   <nav className="space-y-1">
                        <button type="button" onClick={() => setActiveTab("dashbord")}
                            className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all cursor-pointer ${activeTab === "dashboard" ? "bg-blue-50 text-blue-600 font-semibold" : "text-gray-400 hover:bg-gray-50"}`}>
                            <span>🎛️</span> Dashboard
                        </button>
                        <button type="button" onClick={() => setActiveTab("post-opportunity")}
                            className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all cursor-pointer ${activeTab === "post-opportunity" ? "bg-blue-50 text-blue-600 font-semibold" : "text-gray-400 hover:bg-gray-50"}`}>
                            <span>📝</span> Post Opportunity
                       </button>
                        <button type="button" onClick={() => setActiveTab("applications")}
                            className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all cursor-pointer ${activeTab === "aplications" ? "bg-blue-50 text-blue-600 font-semibold" : "text-gray-400 hover:bg-gray-50"}`}>
                            <span>👥</span> Applications
                       </button>
                        <button type="button" onClick={() => setActiveTab("report")}
                            className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all cursor-pointer ${activeTab === "report" ? "bg-blue-50 text-blue-600 font-semibold" : "text-gray-400 hover:bg-gray-50"}`}>
                            <span>📊</span> Reports
                       </button>
                        <button type="button" onClick={() => setActiveTab("setting")}
                            className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all cursor-pointer ${activeTab === "setting" ? "bg-blue-50 text-blue-600 font-semibold" : "text-gray-400 hover:bg-gray-50"}`}>
                            <span>⚙️</span> Settings
                       </button>
                   </nav>
               </div>
                {/*User Identity Profile*/}
                <div className="border-t border-gray-100 pt-4 mt-6">
                   <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                            {orgName.substring(0, 3)}
                       </div>
                       <div>
                            <p className="text-xs font-bold text-gray-900">{orgName} Team</p>
                            <p className="text-[10px] text-gray-400">Manager Account</p>
                        </div>
                   </div>
               </div>
           </aside>
            {/*RIGHT CONTENT WORKSPACE CANVASES*/}
            <main className="flex-1 p-6 md:p-10 overflow-y-auto max-w-4xl mx-auto w-full">
                {/* Welcome Dashboard Banner Header */}
                <header className="mb-8 block text-left">
                    <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Welcome, {orgName} Team!</h2>
                    <p className="text-sm text-gray-500 mt-1">Community Volunteer Platform for {orgName} NGO</p>
               </header>
               {/*EXISTING FORM CARD AND ACTIVE LISTINGS*/}
               {activeTab === "post-opportunity" && (
                    <div className="max-w-3xl mx-auto">
                        {/*HEADER*/}
                        <header className="mb-8 border-b border-gray-200 pb-4">
                            <h1 className="text-2xl font-bold tracking-tight">NGO/ORGANIZATION Management Portal</h1>
                            <p className="text-xs text-gray-500 mt-1">Controlled Form State Dashboard</p>
                        </header>
                        {/*TEXT INPUTS SLOTS ONLY*/}
                        <section className="block w-full max-w-xl bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-6 max-auto">
                            <h2 className="text-lg font-bold text-gray-900 mb-6 block text-left">Draft New Listing</h2>
                            <form onSubmit={handlePostProject} className="block w-full space-y-5">
                                <div className="block w-full space-y-5">
                                    {/*PROJECT TITLE FIELD*/}
                                    <div className="block w-full">
                                        <label className="block text-xs font-semibold text-gray-600 mb-2 text-left">Project Title: </label>
                                        <input type="text" value={projectTitle} onChange={(e) => setProjectTitle(e.target.value)}
                                            placeholder="e.g., Mobile Clinic Outreach"
                                            className="block w-full p-3 bg-white border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500 transition-all"
                                       />
                                   </div>
                                   {/*PROJECT DESCRIPTION FIELD*/}
                                   <div className="block w-full">
                                       <label className="block text-xs font-semibold text-gray-600 mb-2 text-left">Description: </label>
                                       <textarea rows="4" value={description} onChange={(e) => setDescription(e.target.value)}
                                            placeholder="e.g., Describe project and volunteer task"
                                            className="block w-full p-3 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
                                       />
                                   </div>
                                   {/*LOCATION & DURATION*/}
                                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                                       {/*LOCATION INPUT FIELD*/}
                                       <div className="block w-full">
                                           <label className="block text-xs font-semibold text-gray-600 mb-2 text-left">Location: </label>
                                           <input type="text" value={location} onChange={(e) => setLocation(e.target.value)}
                                               placeholder="e.g., Remote/Lagos, Nigeria"
                                              className="block w-full p-3 bg-white border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500 transition-all"
                                           />
                                        </div>
                                        {/*DURATION INPUT FIELD*/}
                                        <div className="block w-full">
                                            <label className="block text-xs font-semibold text-gray-600 mb-2 text-left">Duration: </label>
                                            <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)}
                                                placeholder="e.g., 3 weeks / 5hrs a day"
                                                className="block w-full p-3 bg-white border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500 transition-all"
                                           />
                                       </div>
                                   </div>
                               </div>
                               <button type="submit"
                                    className="block w-full p-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg transition-all shadow-sm cursor-pointer">
                                    Publish Initiative   
                                </button>
                           </form>
                        </section>
                        {/*ACTIVE LISTING FEED*/}
                        <section className="block w-full max-w-xl mx-auto mt-8">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 text-left">
                                Active Listings ({projects.length})
                            </h3>
                            {projects.length === 0 ? (
                                <div className="bg-gray-100 border border-dashed border-gray-300 rounded-xl p-8 text-center text-gray-400 text-sm">
                                    No active initiatives published yet. Use the form above to deploy your first listing.
                               </div>
                            ) : (
                                <div className="space-y-4">
                                    {projects.map((project) => (
                                        <div key={project.id} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all text-left group relative">
                                            <div className="flex items-start justify-between mb-2">
                                                <h4 className="font-bold text-gray-900 text-lg tracking-tight group-hover:text-blue-600 transition-colours">{project.title}</h4>
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">Active</span>
                                            </div>
                                            <div className="flex flex-wrap gap-4 text-xs font-medium text-gray-400 border-b border-gray-50 pb-3 mb-3">
                                                <span className="flex items-center gap-1">
                                                    <span>📍</span> {project.location}
                                               </span>
                                               <span className="flex items-center gap-1">
                                                    <span>🕒</span> {project.duration}
                                                </span>
                                           </div>
                                           <p className="text-sm text-gray-600 leading-relaxed font-normal">
                                              {project.description}
                                           </p>
                                       </div>
                                    ))}
                               </div>
                            )}
                        </section>
                   </div>
               )}
               {activeTab === "applications" && (
                    <div className="space-y-6 animate-fade-in text-left">
                        {/* Heading Section */}
                        <div>
                            <h3 className="text-xl font-medium tracking-tight text-gray-900">Volunteer Submissions</h3>
                            <p className="text-sm text-gray-400 mt-1">Review and manage individuals who applied for your initiatives.</p>
                        </div>
                        {/* Table Container */}
                        <div className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-100 bg-gray-50/50 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                                        <th className="p-4 font-medium">Volunteer</th>
                                        <th className="p-4 font-medium">Applied Position</th>
                                        <th className="p-4 font-medium">Date</th>
                                        <th className="p-4 font-medium">Status</th>
                                        <th className="p-4 font-medium text-right">Actions</th>
                                   </tr>
                               </thead>
                               <tbody className="divide-y divide-gray-50 text-sm text-gray-600">
                                    {applicants.map((applicant) => (
                                        <tr key={applicant.id} className="hover:bg-gray-50/50 transition-colors">
                                            {/* Profile Details */}
                                            <td className="p-4">
                                                <div className="font-medium text-gray-900">{applicant.name}</div>
                                                <div className="text-xs text-gray-400 font-light">{applicant.email}</div>
                                           </td>
                                           {/* Position */}
                                           <td className="p-4 text-gray-500 font-light">{applicant.position}</td>
                                           {/* Date */}
                                           <td className="p-4 text-gray-400 font-light">{applicant.date}</td>
                                           {/* Interactive Dynamic Badge */}
                                           <td className="p-4">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                                                    applicant.status === "Accepted" ? "bg-green-50 text-green-700 border-green-100" : applicant.status === "Declined" ? "bg-red-50 text-red-700 border-red-100" : "bg-yellow-50 text-yellow-700 border-yellow-100"}`}>
                                                    {applicant.status}
                                               </span>
                                           </td>
                                           {/* Action Buttons */}
                                           <td className="p-4 text-right space-x-4">
                                                {applicant.status === "Pending" ? (
                                                    <>
                                                        <button 
                                                            onClick={() => handleStatusChange(applicant.id, "Accepted")}
                                                            className="text-xs font-medium text-green-600 hover:text-green-800 transition-colors">
                                                            Accept
                                                        </button>
                                                        <button 
                                                            onClick={() => handleStatusChange(applicant.id, "Declined")}
                                                            className="text-xs font-medium text-red-500 hover:text-red-700 transition-colors">
                                                            Decline
                                                       </button>
                                                   </>
                                                ) : (
                                                    <span className="text-xs text-gray-300 italic font-light">Processed</span>
                                                )}
                                            </td>
                                       </tr>
                                    ))}
                               </tbody>
                           </table>
                       </div>
                   </div>
                )}
           </main>
       </div>
    );
}
export default NgoDashboard;