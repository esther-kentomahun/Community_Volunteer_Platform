import { useState } from "react";
function Login() {
    const [isLoginTab, setIsLoginTab]= useState(true);
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    //form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit Auth Form:", {mode: isLoginTab? "Login": "Sign Up",
            email: email, password: password,
        });
    };
  return (
    <div className="min-h-screen w-h-full flex items-center justify-center bg-slate-100 relative p-4">
      <div className="absolute inset-0 bg-cover bg-center filter blur-sm opacity-30 pointer-events-none" />
      {/*main form box*/}
      <div className="w-full max-w-md bg-white border border-gray-100 rounded-2xl shadow-xl p-8 relative z-10">
        {/*header text*/}
        <div className="text-center  mb-6">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Join the Community
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Sign Up or Login to make an impact
          </p>
        </div>
        {/*Tab switcher*/}
        <div className="border-b border-gray-100 mb-6 flex">
          <button className="flex-1 text-center pb-3 text-sm font-semibold border-b-2 border-blue-500 text-blue-600">
            Login
          </button>
          <button className="flex-1 text-center pb-3 text-sm font-medium text-gray-400 hover:text-gray-600">
            Sign Up
          </button>
        </div>
      </div>
      {/*Form inputs*/}
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        {/*Email input*/}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Email Address
          </label>
          <div className="relative">
            {/*Envelope icon*/}
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 text-lg">
              ✉️
            </div>
            <input
              type="email"
              placeholder="Enter your work or voluteer email"
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>
        </div>
        {/*Password input*/}
        <div>
          <div className="flex justify-between item-center mb-2">
            <label className="text-sm font-semibold text-gray-900">
              Password
            </label>
            <a
              href="#forgot"
              className="text-xs font-medium text-blue-600 hover:underline"
            >
              Forgot?
            </a>
          </div>
          <div className="relative">
            {/*Lock icon*/}
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointed-events-none text-gray-400 text-lg">
              🔒
            </div>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full pl-10 pr-4 py-3 bg-white border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
export default Login;
