import { useState } from "react";
import { FaUserCircle, FaPen, FaEye, FaEyeSlash } from "react-icons/fa";

function Profile() {
  const CurrentUser = JSON.parse(localStorage.getItem("CurrentUser")) || {};

  const [edittingField, setedittingField] = useState(null);
  const [name, setName] = useState(CurrentUser.name || "");
  const [email, setEmail] = useState(CurrentUser.email || "");
  const [password, setPassword] = useState(CurrentUser.password || "");
  const [showPassword, setShowPassword] = useState(false);

  const saveProfile = () => {
    const oldEmail = CurrentUser.email;

    const updatedUser = {
      ...CurrentUser,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      password,
    };

    // Update CurrentUser
    localStorage.setItem("CurrentUser", JSON.stringify(updatedUser));

    // Remove old email key if email changed
    if (oldEmail !== updatedUser.email) {
      localStorage.removeItem(oldEmail);
    }

    // Save updated user using email as key
    localStorage.setItem(updatedUser.email, JSON.stringify(updatedUser));

    alert("Profile updated successfully!");

    setedittingField(null);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-8 mt-10">
      <div className="flex flex-col items-center">
        <FaUserCircle className="text-8xl text-teal-500" />
        <h2 className="text-2xl font-bold mt-3">My Profile</h2>
      </div>

      <div className="mt-10 space-y-6">
        {/* Name */}
        <div>
          <p className="text-sm text-gray-500">Full Name</p>
          <div className="flex justify-between items-center border-b pb-4">
            {edittingField === "name" ? (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border rounded px-3 py-2 w-full"
              />
            ) : (
              <h3 className="text-lg font-semibold">{name}</h3>
            )}

            {edittingField === "name" ? (
              <button
                onClick={saveProfile}
                className="bg-teal-500 text-white px-3 py-1 rounded ml-2"
              >
                Save
              </button>
            ) : (
              <button onClick={() => setedittingField("name")}>
                <FaPen className="text-gray-500 hover:text-teal-500" />
              </button>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <p className="text-sm text-gray-500">Email</p>
          <div className="flex justify-between items-center border-b pb-4">
            {edittingField === "email" ? (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded px-3 py-2 w-full"
              />
            ) : (
              <h3 className="text-lg font-semibold">{email}</h3>
            )}

            {edittingField === "email" ? (
              <button
                onClick={saveProfile}
                className="bg-teal-500 text-white px-3 py-1 rounded ml-2"
              >
                Save
              </button>
            ) : (
              <button onClick={() => setedittingField("email")}>
                <FaPen className="text-gray-500 hover:text-teal-500" />
              </button>
            )}
          </div>
        </div>

        {/* Password */}
    {/* Password */}
<div>
  <p className="text-sm text-gray-500">Password</p>

  <div className="flex justify-between items-center border-b pb-4">
    {edittingField === "password" ? (
      <div className="flex items-center w-full gap-2">
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded px-3 py-2 flex-1"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="text-gray-600 hover:text-teal-500"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
    ) : (
      <div className="flex items-center gap-3">
        <h3 className="text-lg font-semibold">
          {showPassword ? password : "•".repeat(password.length)}
        </h3>

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="text-gray-600 hover:text-teal-500"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
    )}

    {edittingField === "password" ? (
      <button
        onClick={saveProfile}
        className="bg-teal-500 text-white px-3 py-1 rounded ml-2"
      >
        Save
      </button>
    ) : (
      <button onClick={() => setedittingField("password")}>
        <FaPen className="text-gray-500 hover:text-teal-500" />
      </button>
    )}
  </div>
</div>

        {/* Role */}
        <div>
          <p className="text-sm text-gray-500">Role</p>
          <h3 className="text-lg font-semibold capitalize">
            {CurrentUser.role}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Profile;