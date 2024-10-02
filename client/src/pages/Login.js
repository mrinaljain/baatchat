import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import { useFileHandler } from "6pp";
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const avatar = useFileHandler("single");
  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., API call)
    console.log("Username:", username);
    console.log("Password:", password);
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4 flex flex-col items-center justify-center">
            {!isLogin ? (
              <>
                <div className="relative w-24 text-center">
                  <img
                    alt=""
                    src={avatar.preview}
                    className=" h-24 w-24 rounded-full ring-2 ring-white"
                  />
                  <label className="absolute bottom-0 right-0 p-2 bg-gray-400 text-white rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500">
                    <input
                      className="sr-only"
                      type={"file"}
                      onch
                      onChange={avatar.changeHandler}
                    />
                    <FaCamera />
                  </label>
                </div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="text"
                  placeholder="Bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </>
            ) : (
              <></>
            )}

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <div className="text-center mt-4">
          <button
            onClick={toggleAuthMode}
            className="text-blue-500 hover:underline focus:outline-none"
          >
            {isLogin
              ? "Don't have an account? Sign Up"
              : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
